## Workflow Details

### Triggering the Workflow

- **Scheduled Trigger**: 
  - The workflow is scheduled to run every weekday (Monday to Friday) at **04:00 AM UTC** (which is **9:00 PM PDT** or **8:00 PM PST**).
  - The schedule event is controlled using a **cron** expression to ensure the workflow runs at the specified time.

- **Manual Trigger**: 
  - The workflow can also be manually triggered using the workflow_dispatch event. This allows you to execute the workflow at any time through the GitHub Actions interface.

### Jobs in the Workflow

This workflow contains one job called trigger_replication that is responsible for triggering the API and handling the response.

#### Job: trigger_replication

- **Runner**: The job runs on the ubuntu-latest, which is recommended by CDP team that provides a clean environment for executing the workflow.
- **Steps**:
  1. **Checkout the Repository**: 
     - This step checks out the repository so that the subsequent steps can access the workflow and other necessary resources from the repository.
     
  2. **Set Up Environment Variables**:
     - Based on the event that triggered the workflow (either a manual trigger or a scheduled one), this step sets the environment variables BUILD_TRIGGER_BY and BUILD_TRIGGER_DESC.
     - These variables describe who triggered the build and the nature of the trigger. These values are useful for logging and debugging.
     
  3. **Trigger the Replication API**:
     - This step triggers the **Content Replication API** by sending an HTTP POST request. The API is called using curl, and the request includes important headers:
       - api-key: This is passed as a secret from Github Secrets Folder (REPLICATION_API_TOKEN_DEV).
       - User-Agent: This header is set to the value of BUILD_TRIGGER_BY, indicating who triggered the build.
       - build-trigger: This header contains the description of the trigger event (BUILD_TRIGGER_DESC).
     - The response from the API is evaluated:
       - If the response status code is 202 (indicating successful acceptance of the request), the workflow continues.
       - If the response code is anything other than 202, the workflow fails with an error message, and the build is aborted.

**Note:-** The cron job doesn't guarantee the schedule to happen exactly at the specified time(4 AM UTC), a delay of 2-5 mins is expected.
