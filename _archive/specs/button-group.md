# Component Spec Template – VIVI Agent Chat

## 1. Metadata & Scope
- **Component Name:** Button Group
- **Domain Context (DDD):** Which bounded-context capability does this serve?
- **Feature Slice (FDD):** Link to user story / product feature.
- **Related Screens / Flows:**
- **References:** shadcn component link, Tamagui docs, research notes.

## 2. Intent & Success Criteria (SDD)
- **Purpose Statement:**
- **Functional Requirements:** Bullet the behaviors expected.
- **Non-Functional Requirements:** Performance, accessibility, responsiveness.
- **Acceptance Criteria:** Given/When/Then list.

## 3. Design Tokens & Styling Mapping
- **Required Tokens:** Colors, space, radii, typography, elevations.
- **Token Mapping Notes:** How shadcn classes convert to Tamagui tokens/variants.
- **Variant Matrix:** Sizes, states, themes with descriptions.

## 4. Structural & State Considerations
- **Primitive Composition:** Which Tamagui primitives compose the component.
- **State Sharing:** Context (`createStyledContext`) or props; cross-platform constraints (e.g., Text wrapping).
- **Portal / Stacking Needs:** If floating UI is involved, specify root scope requirements.

## 5. Interaction & Accessibility
- **Event Handling:** Click, press, keyboard navigation, gestures.
- **Accessibility Requirements:** Roles, labels, focus order, screen reader copy.
- **Cross-Platform Deviations:** Web vs native behavior differences and mitigation.

## 6. Logging & Telemetry (LOG)
- **Log Events:** Enumerate situations to log (mount failures, portal issues, validation errors).
- **Log File Naming:** `log-<component>-aaaammdd hhmmss.log`.
- **Log Storage:** Directory/location and retention plan.

## 7. Testing Strategy (TDD)
- **Unit Tests:** Describe initial failing tests and expected coverage.
- **Integration / E2E Tests:** Scenarios in Playwright/Detox/Expo.
- **Snapshot / Visual Tests:** Cross-platform render snapshots or image diff tools.
- **Test Data / Fixtures:** Required mocks or stories.

## 8. Documentation & Deliverables (DOC)
- **Usage Guide:** README snippet or Storybook entry.
- **Changelog Entry:** Planned note for docs/04-changelog.md.
- **Future Ideas:** Note items to capture in docs/05-ideas.md.

## 9. Dependencies & Risks
- **External Dependencies:** Packages, APIs, services.
- **Migration Risks:** Technical or organizational, mitigation plan.
- **Open Questions:** Items needing stakeholder alignment.

## 10. Completion Checklist
- [ ] Spec approved by stakeholders
- [ ] Tests implemented & passing
- [ ] Logs verified with correct naming
- [ ] Documentation updated (plan, tasks, changelog, ideas)
- [ ] Component released in package/app
