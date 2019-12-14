import csv
import requests
import os
import json

images = []
main_url = 'https://proxy.archieven.nl/thumb/39/'
folder_to_save_to = 'artwork/'

with open('queryResults_artwork.csv') as csvfile:
	data_reader = csv.reader(csvfile)
	for row in data_reader:
		images.append(row)
		url = main_url + row[0]
		main_info = requests.get(url)
		if main_info.status_code != 404:
			img_data = main_info.content
			#print(main_info)
			img_name = folder_to_save_to+row[0]+'.jpg'
			print(img_name)
			if not os.path.isfile(img_name) and not 'guid' in img_name:
				with open(img_name, 'wb') as handler:
					handler.write(img_data)


print(len(images))