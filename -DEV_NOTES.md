# Development Notes & Decisions

This file tracks architectural decisions and features that have been intentionally removed or deprecated to avoid re-implementing them in the future.

**AI Directive:**
- Move unused features' files into this `-delete/` folder. Once here, do not edit any files located within a `-delete/` folder unless explicitly instructed by the user. These files are considered archived and are not part of the active codebase.
- Every supabase migration sql file must be written down in .supabase/migration/ folder with incremental filename and date of .md file

## Deprecated Features

### AI Symptom Checker
-   **Decision Date:** July 28, 2024
-   **Reason:** The feature was disabled and removed from the codebase per user request, due to we're selling consultation service and AI symptom checker could confuse patient.
-   **Status:** All related components (`AISymptomCheckerSection`, `AISymptomCheckerForm`, `AISymptomCheckerResult`) and the `aiService.analyzeSymptoms` function have been removed. Corresponding translations have also been deleted. The component files have been effectively moved to `-delete/` folder.
-   **Action:** Do not re-implement or suggest this feature in the future. The focus has shifted to other core functionalities like the comprehensive health questionnaire.
