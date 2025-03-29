# Use a Python base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

RUN apt-get update && apt-get install -y libpq-dev 
# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install python dependencies
COPY Backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy React dependencies and install them
COPY Frontend/package*.json ./react-app/
RUN cd react-app && npm install

# Copy the rest of the application code
COPY . .


# Build the React app
RUN cd /app/Frontend && npm run build

# Django migrations and static files
# RUN python Backend/nyuma/manage.py migrate
# RUN python Backend/nyuma/manage.py collectstatic --no-input

# Expose ports
EXPOSE 8000
EXPOSE 3000

RUN chmod +x ./start.sh
# Start Django and React (using a shell script or a process manager like supervisor)
CMD ./start.sh # create a start.sh file that starts both django and the react static server.