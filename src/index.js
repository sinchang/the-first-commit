const execSync = require('child_process').execSync
const TGM = require('the-git-commit')

export default function (cwd) {
  const cmd = 'git log --reverse'
  const logInfo = execSync(cmd, { cwd }).toString()
  const hash = logInfo.split('\n')[0].split(' ')[1]

  const ret = new TGM(cwd).info(hash)

  return ret
}
