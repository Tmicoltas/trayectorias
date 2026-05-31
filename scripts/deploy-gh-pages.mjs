import { execSync } from 'node:child_process'
import { cpSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const repoUrl = 'https://github.com/Tmicoltas/trayectorias.git'
const tempDir = mkdtempSync(join(tmpdir(), 'trayectorias-deploy-'))

try {
  execSync('git init', { cwd: tempDir, stdio: 'inherit' })
  execSync('git checkout -b gh-pages', { cwd: tempDir, stdio: 'inherit' })
  cpSync('dist', tempDir, { recursive: true })
  execSync('git add .', { cwd: tempDir, stdio: 'inherit' })
  execSync('git commit -m "Deploy site"', { cwd: tempDir, stdio: 'inherit' })
  execSync(`git push -f ${repoUrl} gh-pages`, { cwd: tempDir, stdio: 'inherit' })
  console.log('\nDeploy listo: https://tmicoltas.github.io/trayectorias/')
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}
