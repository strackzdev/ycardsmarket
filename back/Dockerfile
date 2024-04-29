# Stage 1: Build stage for installing dependencies
FROM python:3.10-slim as builder
WORKDIR /app
COPY requirements.txt .
# Install dependencies globally in the builder stage
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Stage 2: Application stage to run the Django app
FROM python:3.10-slim
WORKDIR /app
# Copy installed packages from the builder stage
COPY --from=builder /usr/local /usr/local
COPY . .
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Expose the port Gunicorn will listen on
EXPOSE 8000

# The CMD could run Django's development server or Gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "back.wsgi:application"]
