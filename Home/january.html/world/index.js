function updateTime() {
  const chinaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" });
  document.getElementById("china-time").textContent = chinaTime;

  const indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  document.getElementById("india-time").textContent = indiaTime;

  const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  document.getElementById("usa-time").textContent = usaTime;
}

setInterval(updateTime, 1000);
