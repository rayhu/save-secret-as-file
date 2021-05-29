# This action save the credential as a random filename

When GitHub workflow interact with Google Cloud, there is often a save the service account json key from a GitHub secret and use the filename in a later step.

## Inputs

### `secret`

**Required** The secret to be saved

### `filename`

**Optional** The filename, will output random unique filename if not provided

## Outputs

### `filename`

## Example usage

      - name: save GitHub secret as file
        id: save-google-service-account-key
        uses: rayhu/save-secret-as-file@v1
        with:
          secret: ${{ secrets.GCLOUD_SERVICE_ACCOUNT_JSON_KEY }}

In the other steps, you can use the output from this step such as:

      - name: Upload artifacts to cloud storage
        uses: .\DesktopSetup\.github\actions\upload-cloud-storage
        with:
          application_credentials: ${{ steps.save-google-service-account-key.outputs.filename }}

### This action is created following the document here:
https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
