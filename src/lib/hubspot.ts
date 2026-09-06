type HubspotField = { name: string; value: string };

export class HubspotNotConfiguredError extends Error {
  constructor() {
    super("HubSpot is not configured yet");
    this.name = "HubspotNotConfiguredError";
  }
}

/**
 * Submits a form to HubSpot's Forms API so entries show up as contacts/deals
 * in the HubSpot CRM. Requires HUBSPOT_PORTAL_ID and the given form's GUID
 * env var to be set — see .env.local.example.
 *
 * The account is hosted in HubSpot's EU data center, which uses a
 * region-specific API host (api-eu1.hsforms.com) instead of the default
 * api.hsforms.com — submissions silently fail against the wrong host.
 */
export async function submitToHubspot(
  formGuidEnvVar: string,
  fields: HubspotField[]
) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env[formGuidEnvVar];

  if (!portalId || !formGuid) {
    throw new HubspotNotConfiguredError();
  }

  const response = await fetch(
    `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: "thegirlsocial.com",
          pageName: "Oslo Girl Social",
        },
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`HubSpot submission failed (${response.status}): ${body}`);
  }
}
