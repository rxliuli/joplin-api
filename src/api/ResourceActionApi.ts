import { ajax } from '../util/ajax'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'isWatched',
}

class ResourceActionApi {
  openAndWatch(resourceId: string) {
    return ResourceActionApi.baseAction(ActionEnum.OpenAndWatch, resourceId)
  }

  stopWatching(resourceId: string) {
    return ResourceActionApi.baseAction(ActionEnum.StopWatching, resourceId)
  }

  async noteIsWatched(resourceId: string) {
    return ResourceActionApi.baseAction(ActionEnum.NoteIsWatched, resourceId)
  }

  private static async baseAction(action: ActionEnum, resourceId: string) {
    return ajax.post('/services/resourceEditWatcher', {
      action,
      resourceId,
    })
  }
}

export const resourceActionApi = new ResourceActionApi()