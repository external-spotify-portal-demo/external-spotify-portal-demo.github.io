---
slug: /
sidebar_position: 1
title: 'Getting Started with the Bundle'
---

Welcome to the documentation for the Spotify Plugin Bundle for Backstage! This comprehensive bundle offers a wide range of features and integrations designed to enhance your Backstage experience. Please note that this documentation is continually evolving, as we strive to add more components and improvements over time.

## What's Included

The Spotify Plugin Bundle for Backstage currently includes the following components:

- **RBAC (Role-Based Access Control):** Control access to actions and data in Backstage with ease
- **Insights:** Identify, benchmark, and understand usage trends to drive Backstage adoption
- **Soundcheck:** Ensure quality, reliability, and alignment of software development with codified checks and guidance
- **Skill Exchange:** Build an internal marketplace for learning and growth opportunities within R&D
- **Pulse:** Collect data that drives continuous improvements to your R&D tooling, processes, and culture

We're committed to expanding the capabilities of this bundle, so stay tuned for more exciting additions in the future!

### Quick Navigation

- [RBAC Documentation](/rbac)
- [Insights Documentation](/insights)
- [Soundcheck Documentation](/soundcheck)
- [Skill Exchange Documentation](/skill-exchange)
- [Pulse Documentation](/pulse)

## New to Backstage?

If you're new to Backstage and would like to get started with the project itself, we recommend visiting the official Backstage open-source documentation available at [backstage.io](https://backstage.io). Backstage is an open-source platform for building developer portals that provides a unified developer experience for your organization.

Here are some key resources to help you begin your journey with Backstage:

- **[Getting Started Tutorials:](https://backstage.io/docs/getting-started/)** Step-by-step guides to help you become familiar with Backstage's core concepts.
- **[Community and Support:](https://backstage.io/community/)** Connect with the Backstage community, ask questions, and seek assistance if needed.

Once you've grasped the fundamentals of Backstage, you'll be better equipped to make the most of the Spotify Plugin Bundle and its components.

## Obtaining a License Key

To utilize any of the plugins within this bundle, you must obtain a license key from [backstage.spotify.com](https://backstage.spotify.com/). After acquiring a license key, follow the instructions available on [backstage.spotify.com/account](https://backstage.spotify.com/account) before proceeding.

**License Key Setup:**

1. Add the following code to your `app-config.yaml` for your Backstage instance, replacing `<your_license_key_here>` with your actual license key:

   ```yaml
   spotify:
     licenseKey: <your_license_key_here>
   ```

2. To enable online license validation, verify that your Backstage instance can access `backstage-api.spotify.com`. You can use a tool like NetCat to check the connection:

   ```bash
   $ nc -vz backstage-api.spotify.com 443
   Connection to backstage-api.spotify.com 443 port [tcp/https] succeeded!
   ```

## Check Your Backstage Version

Please ensure that your Backstage version aligns with the supported version indicated in the installation instructions found on [backstage.spotify.com/account](https://backstage.spotify.com/account). It's important to verify compatibility before updating Backstage.

**Current Compatible Backstage Version for the Bundle:**

Minimum Backstage version 1.16.0

The Spotify Plugins for Backstage depend on recent and ongoing changes in Backstage. To guarantee that your Backstage installation has all the necessary functionality, upgrade to the version specified above. If your Backstage version is lower, you can use the Backstage upgrade helper to ensure that you've incorporated all required changes during the upgrade process. Additionally, please note that these plugins may be compatible with versions newer than the one listed above.

## Upgrading

Just like with Backstage itself, we highly recommend you stay on the latest version of the Spotify Plugin Bundle. Thankfully this follows the same process, you can simply run the `version:bump` command like this:

```shell
yarn backstage-cli versions:bump --pattern "@spotify/backstage*"
```

This will bump all the related Spotify Plugin Bundle packages for you. As you are doing this you'll also want to check the [release notes](https://backstage.spotify.com/release-notes/) to see if there are any manual changes needed.

## Feedback and Support

We're constantly improving this documentation to make your experience even better. If you have questions, feedback, or encounter any issues, please feel free to reach out to us.

Thank you for choosing the Spotify Plugin Bundle for Backstage. We hope this resource helps you make the most of Backstage's capabilities and elevate your developer experience. Happy exploring!
