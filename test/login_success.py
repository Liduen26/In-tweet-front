from selenium import webdriver
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import url_changes
from selenium.webdriver.common.by import By

from dotenv import dotenv_values

API_URL = dotenv_values("../.env").get("API_URL")

driver = webdriver.Chrome()

login = f'{API_URL}/login'
home = f'{API_URL}/'

driver.get(login)

username = driver.find_element(By.NAME, "username")
password = driver.find_element(By.NAME, "password")

password.clear()
password.send_keys("test1234")

username.clear()
username.send_keys("jb")

connectButton = driver.find_element(By.ID, "connect-button")

connectButton.click()

wait = WebDriverWait(driver, timeout=5)
wait.until(url_changes(login))

assert driver.current_url == home

driver.close()