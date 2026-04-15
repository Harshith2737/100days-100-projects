from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
import time
import os

class WhatsAppSender:
    def __init__(self):
        self.driver = None

    def start_driver(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--user-data-dir=./chrome_profile")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--disable-gpu")
        options.add_argument("--window-size=1920,1080")
        # For headless, but for QR scan, need visible
        # options.add_argument("--headless")

        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
        self.driver.get("https://web.whatsapp.com/")
        print("Please scan the QR code and press Enter once logged in.")
        input()

    def send_message(self, phone_number, message):
        if not self.driver:
            self.start_driver()

        # Format phone number for WhatsApp URL
        phone = phone_number.replace("+", "").replace(" ", "")
        url = f"https://web.whatsapp.com/send?phone={phone}&text={message.replace(' ', '%20')}"

        self.driver.get(url)

        try:
            # Wait for the send button
            send_button = WebDriverWait(self.driver, 30).until(
                EC.element_to_be_clickable((By.XPATH, "//span[@data-icon='send']"))
            )
            send_button.click()
            time.sleep(2)  # Wait for message to send
            return True
        except Exception as e:
            print(f"Error sending message: {e}")
            return False

    def close(self):
        if self.driver:
            self.driver.quit()

# Global instance
sender = WhatsAppSender()