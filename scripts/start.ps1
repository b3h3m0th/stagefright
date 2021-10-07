
function startDev() {
  Invoke-Expression "npm run dev";
}

function run() {
  Write-Host -ForegroundColor Green "Starting StageFright Website...";
  startDev;
}

run;
