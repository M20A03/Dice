FROM python:3.12-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app
COPY app.py dice_trick.py ./

# Expose port
EXPOSE 8080

# Run with gunicorn
CMD exec gunicorn --bind :8080 --workers 1 --timeout 300 app:app
