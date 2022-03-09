import requests


def send_message(message):
    url = "https://api.wassenger.com/v1/messages"

    payload = {
        "phone": str(+919833447698),
        "message": message
    }
    headers = {
        "Content-Type": "application/json",
        "Token": "342f92b9788a6b3ce778586775ede7673d790ed460f802c97ee13fffade7bc00b25b1f51a5fe5bf2"
    }

    response = requests.request("POST", url, json=payload, headers=headers)

    print(response.text)