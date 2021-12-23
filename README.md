# demo-npm-userdo

## Usage

```zsh
$ circleci config process .circleci/config.yml > process.yml
$ circleci local execute -c process.yml --job my-job

====>> npm run whoami
[USER] circleci
[HOME] /home/circleci

====>> sudo npm run whoami
[USER] circleci
[HOME] /root

====>> node whoami.js
[USER] circleci
[HOME] /home/circleci

====>> sudo node whoami.js
[USER] root
[HOME] /root
```