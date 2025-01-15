import { json } from '@sveltejs/kit';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_ACCESS_TOKEN } from '$env/static/private';

export async function POST({ request }) {
  const data = await request.json(); // Get the form data from the frontend 

  const environmentId = 'master';
  const contentTypeId = 'formSubmission';

  try {
    const response = await fetch(
      `https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${environmentId}/entries`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_ACCESS_TOKEN}`,
          'Content-Type': 'application/vnd.contentful.management.v1+json',
          'X-Contentful-Content-Type': contentTypeId,
        },
        body: JSON.stringify({
          fields: {
            firstName: { 'en-US': data['firstName'] },
            lastName: { 'en-US': data['lastName'] },
            email: { 'en-US': data['email'] },
            phone: { 'en-US': data['phone'] },
            // Convert 'persons' to an integer
            persons: { 'en-US': parseInt(data['persons'], 10) },
            request: { 'en-US': data['request'] },
            date: { 'en-US': data['date'] },
            time: { 'en-US': data['time'] },
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      
      // Return the error details in the response
      return json({ 
        error: 'Failed to save form submission to Contentful',
        details: error.details ? error.details.errors : 'No detailed error message available',
      }, { status: 500 });
    }

    const entry = await response.json();
    return json({ success: true, entry });

  } catch (error) {
    console.error('Unexpected Error:', error);
    return json({ error: 'Unexpected error occurred' }, { status: 500 });
  }
}




