# Event map source notes

## India boundary

Source agency: Survey of India, Department of Science & Technology, Government of India.

- Official download page: [Outline Maps of India](https://surveyofindia.gov.in/pages/outline-maps-of-india)
- Source file: [Outline_of_India.zip](https://surveyofindia.gov.in/documents/Outline_of_India.zip), downloaded 1 November 2026.
- Source archive SHA-256: `bf48477f01fe8addd6384490fc6f8decc9643110331ffef2c3f17e5cccd53b88`.
- Source shapefile has 1,151 polygon rings and 629,724 points, in the published LCC_WGS84 projection.
- Every source ring is retained. Display geometry is simplified at a tolerance of 150 metres in the source projection; no territorial sections are manually added, removed, relabelled or traced from a third-party image.
- The India view uses this official outline alone. The Asia view also uses this same official India outline, reprojected and drawn above the surrounding land context. Natural Earth is not used for India's boundary in either view.
- Copyright remains with Survey of India. The source's terms apply; attribution is not a grant of additional rights. See the agency's [outline-vector use notice](https://www.surveyofindia.gov.in/documents/ibd-vectorformat.pdf).

The map is an event-location interface, not a political-party or state-administration map. It does not reproduce the party colours, political labels or administrative claims of the supplied reference image.

## Other geography and locations

The Asia view uses Natural Earth solely for surrounding land context, without country-boundary strokes. City reference coordinates come from Natural Earth, GeoNames and the regional government sources recorded per location in `event-map-data.js`. Pins identify approximate cities or regional groupings, not exact venue addresses.

## Project-team confirmations

The location corrections supplied on 1 November 2026 take precedence over automated keyword matching. All SLSWCA and HLCA entries are assigned to Bhubaneswar. The named city confirmations, Ganjam/Berhampur grouping, and media/progress-summary classifications are applied only to map assignments; archived event dates, descriptions, photographs and browser-saved edits are unchanged.

These source notes accompany the event-map release. Browser-local event edits remain local unless separately published through the project's release workflow.
