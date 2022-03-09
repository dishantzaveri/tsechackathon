from apscheduler.schedulers.background import BackgroundScheduler
from patient.views import MedicineAPI

def start():
  scheduler = BackgroundScheduler()
  medicine = MedicineAPI()
  scheduler.add_job(medicine.medicine_reminder, "interval", seconds=1,id="reminder_001",replace_existing=True)
  scheduler.start()