import requests


def send_message(message):
    url = "https://api.wassenger.com/v1/messages"

    payload = {
        "phone": str(+919833447698),
        "message": message
    }
    headers = {
        "Content-Type": "application/json",
        "Token": "e4018cd24bb1f1a0fdc7287bfe29985556b0f22e0b93bfb24bda7c974b0ad23a683479e22e09f746"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)