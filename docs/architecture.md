# Architecture

## Components

1. **Data Ingestion Layer** - Automated scrapers/API clients for each feed provider
2. **Normalization Engine** - Maps feed outputs to common schema
3. **API Server** - Express.js REST API
4. **Web Dashboard** - React SPA with Recharts
5. **Community Data Layer** - Git-based correction system

## Data Flow

Feed Provider APIs → Ingestion Workers → Normalization → Database → REST API → Dashboard
                                                          ↓
                                            Community Corrections (Git PRs)
