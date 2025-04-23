/*
import { json } from '@sveltejs/kit';
import { parse } from 'querystring';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } from '$env/static/private';

export async function POST({ request }) {
  try {
    let data;

    // Check the content type of the request
    const contentType = request.headers.get('Content-Type');

    if (contentType && contentType.includes('application/json')) {
      // If the request is JSON, parse it as JSON
      data = await request.json();
    } else if (contentType && contentType.includes('application/x-www-form-urlencoded')) {
      // If the request is URL-encoded (traditional form submission), parse it using querystring
      const body = await request.text();
      data = parse(body);  // Parse the body as URL-encoded data
    } else {
      // Return an error if the content type is unexpected
      return json({ error: 'Unsupported content type' }, { status: 400 });
    }

    const environmentId = 'master';
    const contentTypeId = 'formSubmission';

    // Sending form data to Contentful
    const response = await fetch(
      `https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${environmentId}/entries`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_TOKEN}`,
          'Content-Type': 'application/vnd.contentful.management.v1+json',
          'X-Contentful-Content-Type': contentTypeId,
        },
        body: JSON.stringify({
          fields: {
            firstName: { 'en-US': data.firstName },
            lastName: { 'en-US': data.lastName },
            email: { 'en-US': data.email },
            phone: { 'en-US': data.phone },
            persons: { 'en-US': parseInt(data.persons, 10) },
            request: { 'en-US': data.request },
            date: { 'en-US': data.date },
            time: { 'en-US': data.time },
          },
        }),
      }
    );

    // Handle response from Contentful
    if (!response.ok) {
      const error = await response.json();
      return json({ 
        error: 'Failed to save form submission to Contentful',
        details: error.details ? error.details.errors : 'No detailed error message available',
      }, { status: 500 });
    }

    const entry = await response.json();

    // Perform HTTP redirect by default
    const redirectResponse = new Response('', {
      status: 302,
      headers: {
        Location: '/group-bookings?success=true',
      },
    });

    // If JavaScript is enabled, return JSON response instead of redirect
    const jsEnabled = data.jsEnabled === "true";
    if (jsEnabled) {
      return json({ success: true, entry });
    }

    // Otherwise, return the redirect response
    return redirectResponse;

  } catch (error) {
    console.error('Unexpected Error:', error);
    return json({ error: 'Unexpected error occurred' }, { status: 500 });
  }
}
*/
