from django.apps import AppConfig


class PatientConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'patient'

    # def ready(self):
    #     print("Starting Scheduler ...")
    #     from .reminder_scheduler import reminder_checker
    #     reminder_checker.start()
