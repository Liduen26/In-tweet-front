from selenium import webdriver
from selenium.webdriver.firefox.options import Options

def test_firefox():
    options = Options()
    options.add_argument("--headless")  # Pour exécuter Firefox sans interface graphique
    driver = webdriver.Firefox(options=options)

    driver.get("http://localhost:3000")
    assert "Projet react" in driver.title

    driver.quit()

if __name__ == "__main__":
    test_firefox()