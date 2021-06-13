import requests
from bs4 import BeautifulSoup

def fetchProsaPosts() -> list({}):
	print("fetchProsaPosts triggered ...")
	req = requests.get("https://www.prosa.dk/kurser/")

	print(req.status_code)

	soup  = BeautifulSoup(req.content, 'html.parser')

	event_divs = soup.select("#eventList div.article")

	# extract info from each post
	posts = []
	for event_div in event_divs:
			data = {}

			event_date_div = event_div.find("div", {"class": "news-list-date"})
			data["date_day"]       = event_date_div.find("div", {"class": "day"}).text
			data["date_month"]     = event_date_div.find("div", {"class": "month"}).text
			data["date_eventTime"] = event_date_div.find("div", {"class": "eventTime"}).text
			event_info_div = event_div.find("div", {"class": "filterArticleContainer"})
			data["info_title"]   = event_info_div.find("div", {"class": "header"}).text
			data["info_details"] = event_info_div.find("div", {"class": "teaser-text"}).text

			posts.append(data)

	for post in posts:
			print(post)

	print()
	print()
	print(post)
	print()
	return posts
