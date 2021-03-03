# Get Current Branch
$branch = git rev-parse --abbrev-ref HEAD

# Get Commit ID
$commitid = git log --format="%H" -n 1

# Get Commit Message
$commitlog = ( (git log -1 --pretty="%B") -join "`r`n")
$commitlog = $commitlog.Replace("`r`n","\n")

# Get last Commit date
$commitdate = git log -1 --format="%cd"

# Get untracked files
$status = ( (git status --short) -join "`r`n")
$status = $status.Replace("`r`n","\n")

$json = @"
{
"branch": "$branch",
"commitid": "$commitid",
"commitlog": "$commitlog",
"commitdate": "$commitdate",
"status": "$status"
}
"@

New-Item -ItemType Directory -Force -Path data
$json | Out-File data/gitstatus.json -encoding ASCII