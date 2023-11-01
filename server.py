import csv

# Define the user data
users = [
    {"username": "AlexAdmin", "password": "123", "role": "admin"},
    {"username": "Alex", "password": "1234", "role": "user"},
]

# Specify the CSV file path
csv_file = "users.csv"

# Write the user data to the CSV file
with open(csv_file, mode='w', newline='') as file:
    fieldnames = ['username', 'password', 'role']
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    # Write the header row
    writer.writeheader()

    # Write user data
    writer.writerows(users)

print(f'User data saved to {csv_file}')
