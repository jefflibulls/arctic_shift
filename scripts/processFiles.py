import sys
version = sys.version_info
if version.major < 3 or (version.major == 3 and version.minor < 10):
	raise RuntimeError("This script requires Python 3.10 or higher")
import os
from typing import Iterable

from fileStreams import getFileJsonStream
from utils import FileProgressLog


# fileOrFolderPath = r"<path to file or folder>"
fileOrFolderPath = r"C:\data\subreddits_2024-01.zst"
recursive = False

def processFile(path: str):
	print(f"Processing file {path}")
	with open(path, "rb") as f:
		jsonStream = getFileJsonStream(path, f)
		if jsonStream is None:
			print(f"Skipping unknown file {path}")
			return
		progressLog = FileProgressLog(path, f)

		# Initialize results variable
		results = []

		# for row in jsonStream:
		for i, row in enumerate(jsonStream):

			if i >= 100:
				break # Stop after 10 rows for testing

			progressLog.onRow()
			# PUT YOUR CODE HERE
			
			# example fields
			subreddit_nm = row["display_name"]
			num_comments = row["_meta"]["num_comments"]
			# author = row["author"]
			# subreddit = row["subreddit"]
			# id = row["id"]
			# created = row["created_utc"]
			# score = row["score"]
			# posts only
			title = row["title"]
			# body = row["selftext"]
			# url = row["url"]
			# comments only
			# body = row["body"]
			# parent = row["parent_id"]	# id/name of the parent comment or post (e.g. t3_abc123 or t1_abc123)
			# link_id = row["link_id"]	# id/name of the post (e.g. t3_abc123)

			results.append(num_comments)

		progressLog.logProgress("\n")

	# return row.keys()
	return results


def processFolder(path: str):
	fileIterator: Iterable[str]
	if recursive:
		def recursiveFileIterator():
			for root, dirs, files in os.walk(path):
				for file in files:
					yield os.path.join(root, file)
		fileIterator = recursiveFileIterator()
	else:
		fileIterator = os.listdir(path)
		fileIterator = (os.path.join(path, file) for file in fileIterator)
	
	for i, file in enumerate(fileIterator):
		print(f"Processing file {i+1: 3} {file}")
		processFile(file)

def main():
	if os.path.isdir(fileOrFolderPath):
		results = processFolder(fileOrFolderPath)
		print(results)
	else:
		results = processFile(fileOrFolderPath)
		print(results)
	
	print("Done :>")

if __name__ == "__main__":
	main()
