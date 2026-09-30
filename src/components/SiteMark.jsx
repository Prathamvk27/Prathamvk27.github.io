import { profile } from "../data/profileData"

export function SiteMark() {
  return <a className="site-mark" href="/" aria-label={`${profile.shortName} home`}>PV</a>
}
