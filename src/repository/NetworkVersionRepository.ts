import { Version } from 'frontend-skeleton/src/model/version.ts'

export interface VersionRepository {
  getVersion(): Promise<Version>
}

export class NetworkVersionRepository implements VersionRepository {
  async getVersion(): Promise<Version> {
    const res = await fetch('/api/version')
    return res.json()
  }
}
