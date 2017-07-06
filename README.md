# soundcloud-user-id

To use the script:

```
const soundcloudService = require('soundcloud-user-id')

soundcloudService.getSoundcloudUserId('justinbieber')
.then(soundcloudUserId => {
  console.log('id: ', soundcloudUserId)
})

```
