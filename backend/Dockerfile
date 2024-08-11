# syntax=docker/dockerfile:1

# Set the Python version
ARG PYTHON_VERSION=3.12.4
FROM python:${PYTHON_VERSION}-slim AS base

# Prevent Python from writing pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Keep Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Create a non-privileged user for running the app
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser

# Install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Switch to the non-privileged user
USER appuser

# Copy the source code into the container
COPY app/ /app/

# Expose the port that the application listens on
EXPOSE 5000

# Run the Flask application
CMD ["python", "app.py"]