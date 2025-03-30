#!/bin/bash

python Backend/nyuma/manage.py migrate
# Start the Django server
python Backend/nyuma/manage.py runserver 0.0.0.0:8000 &

# Start the React static server
#cd Frontend && npx serve -s build -l 3000

# Keep the container running
wait