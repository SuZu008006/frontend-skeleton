import { Version } from 'frontend-skeleton/src/model/version.ts'
import {
  NetworkVersionRepository,
  VersionRepository
} from './NetworkVersionRepository.ts'


describe('NetworkVersionRepository', () => {
  let versionRepository: VersionRepository

  beforeEach(()=>{
    versionRepository = new NetworkVersionRepository
  })

  it('getVersionを実行したとき、versionを返す', async () => {
    // assert
    const stubVersion: Version = { version: '0.0.1' }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(stubVersion),
      })
    ) as jest.Mock

    // act
    const res = await versionRepository.getVersion()

    // arrange
    expect(global.fetch).toHaveBeenCalledWith('/api/version')
    expect(res).toEqual(stubVersion)
  })
})
