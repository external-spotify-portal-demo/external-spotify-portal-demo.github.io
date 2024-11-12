---
sidebar_position: 2
title: 'RBAC'
---

## What does RBAC help me do?

The RBAC plugin works with the [Backstage permission framework](https://backstage.io/docs/permissions/overview) to provide support for role-based access control in Backstage. The Backstage permission framework is a system in the open-source Backstage project, which allows granular control of access to specific resources or actions. The permission framework is currently supported in the Catalog and TechDocs, with other core features soon to come. In the future, we’ll encourage third-party plugin authors to add permission support too — which can be done without changes to the Backstage core.

Permissions are controlled in a Backstage instance through a **policy**. A policy is simply an async function which receives a request to authorize a specific action for a user and (optional) resource, and returns a decision on whether to authorize that permission. Without the RBAC plugin, integrators must implement their own policies from scratch, or adapt reusable policies written by others.

The RBAC plugin allows you to control permissions in Backstage without writing code. Instead, you can manage your policy using the RBAC interface integrated with Backstage. Once you publish the changes to your policy, they will be reflected immediately.

With the RBAC plugin, you manage the permissions in your Backstage instance by assigning users and groups to roles, and configuring the rules that should apply for each role. You can use powerful matching features to keep your policy short, or supply granular decisions for each available permission and role.

## Demo


Learn more about our [RBAC plugin](https://backstage.spotify.com/plugins/rbac)
