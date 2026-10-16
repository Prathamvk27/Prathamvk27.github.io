const e=`---
title: "Thursdays and Fridays Are CUDA Days — Part 1"
description: "A first look at CUDA's execution model, memory, and vector addition."
published: 2026-10-01
topics: "CUDA, GPU programming"
draft: false
---

Before we start, a shoutout to Zachary Huang for his clear explanation of CUDA. His kitchen analogy helped me think about why GPUs are useful for certain kinds of work.

A CPU is like a chef who can prepare many different parts of a meal. A GPU is more like a large team that can each do a small, similar task. If the task can be split into many independent pieces, that team can work on them at the same time.

CUDA is NVIDIA's platform for running parallel work on its GPUs. Its programming model organizes work into **threads**, **blocks**, and **grids**:

1. A **thread** runs one instance of the kernel code.
2. A **block** groups threads that can cooperate, including through shared memory.
3. A **grid** is the collection of blocks launched for a kernel.

Threads are software work items, not individual physical CUDA cores. The GPU schedules groups of threads onto its streaming multiprocessors (SMs). An NVIDIA A100 has 6,912 FP32 CUDA cores, but the number of threads that can be resident at once depends on the GPU and on resources used by the kernel. A launched grid can contain more threads than can run concurrently; the GPU schedules them in waves.

## A short look at GPU memory

In a typical discrete-GPU setup, data may move between host memory (the CPU's memory) and device memory (the GPU's memory). The GPU also has faster, smaller storage close to its compute units:

1. **Global memory** is the large device memory accessible to threads. It has much higher capacity than on-chip storage, but accessing it generally costs more time.
2. **Shared memory** is on-chip storage that threads in the same block can share. It can help when threads reuse data or need to cooperate.
3. **Registers** are small, fast storage used privately by each thread.

These are general relationships, not fixed latency numbers: performance varies by GPU architecture, access pattern, and workload. The right optimization depends on the work. For vector addition, each input value is read once, so moving values through shared memory usually does not help. Coalesced global-memory access and avoiding unnecessary host-to-device transfers matter more.

## Our first kernel: vector addition

The task is to add two arrays element by element:

\`\`\`text
C[i] = A[i] + B[i]
\`\`\`

Each output element is independent, so one thread can calculate one element. Here is the kernel:

\`\`\`cuda
__global__ void addKernel(int *c, const int *a, const int *b, int size) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < size) {
        c[i] = a[i] + b[i];
    }
}
\`\`\`

The index calculation gives each thread a unique position:

\`\`\`text
i = blockIdx.x * blockDim.x + threadIdx.x
\`\`\`

\`blockIdx.x\` identifies the block, \`blockDim.x\` is the number of threads in each block, and \`threadIdx.x\` identifies a thread within its block. For example, thread 12 in block 5, with 256 threads per block, calculates index \`5 * 256 + 12 = 1292\`.

The CPU launches the kernel and manages the data transfer. This is the shape of the host-side steps; it is an outline, not a complete standalone program:

1. Allocate device arrays with \`cudaMalloc\`.
2. Copy the input arrays to device memory with \`cudaMemcpy(..., cudaMemcpyHostToDevice)\`.
3. Choose a block size and calculate the number of blocks:

   \`\`\`cuda
   int threadsPerBlock = 256;
   int blocksPerGrid = (size + threadsPerBlock - 1) / threadsPerBlock;
   addKernel<<<blocksPerGrid, threadsPerBlock>>>(dev_c, dev_a, dev_b, size);
   \`\`\`

4. Copy the result back with \`cudaMemcpy(..., cudaMemcpyDeviceToHost)\`.
5. Free the device arrays with \`cudaFree\`.

The \`i < size\` check handles the extra threads in the final block when the array length is not an exact multiple of the block size. For a million-element example initialized with \`A[i] = i\` and \`B[i] = 2 * i\`, the expected values include \`C[0] = 0\` and \`C[999999] = 2999997\`.

## What should we measure?

This example uses integer addition, so GFLOPS (floating-point operations per second) is not the right measure. Vector addition also does little computation for the amount of data it reads and writes, so effective memory bandwidth is often a more useful metric. For 32-bit values, each element reads two 4-byte inputs and writes one 4-byte output: 12 bytes per element, before considering caching and other effects.

To compare implementations, measure elapsed kernel time on a stated GPU, use the same input size, and explain whether the timing includes data transfers. Report the method and repeated measurements; a speedup number without those details is hard to interpret. Host-to-device transfers can cost much more per byte than device-memory access, so a useful general rule is to send data once, do enough work on the GPU, and copy back only what is needed.

In the next post, I will look at optimizing the kernel and measuring the results.
`;export{e as default};
