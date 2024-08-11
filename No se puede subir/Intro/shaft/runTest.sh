echo 🧪 Running tests...
docker-compose -f docker-compose.ci.yml up --exit-code-from api --abort-on-container-exit
TEST_EXIT_CODE=$?

echo 🧹 Cleaning up...
docker-compose -f docker-compose.ci.yml down --volumes

if [ $TEST_EXIT_CODE -ne 0 ]; then
    exit 1
fi
