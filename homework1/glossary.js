// Glossary data
const glossaryEntries = [
    {
        term: "API",
        description: "Application Programming Interface - a set of protocols and tools for building software applications that define how different software components should interact.",
        tags: ["web", "development", "backend"]
    },
    {
        term: "REST",
        description: "Representational State Transfer - an architectural style for designing networked applications using stateless, cacheable HTTP requests.",
        tags: ["web", "api", "architecture"]
    },
    {
        term: "JavaScript",
        description: "A high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
        tags: ["programming", "web", "frontend"]
    },
    {
        term: "Docker",
        description: "A platform that uses containerization to package applications and their dependencies into lightweight, portable containers that can run consistently across different environments.",
        tags: ["devops", "containers", "deployment"]
    },
    {
        term: "Microservices",
        description: "An architectural approach where a single application is built as a suite of small, independent services that communicate over well-defined APIs.",
        tags: ["architecture", "backend", "scalability"]
    },
    {
        term: "GraphQL",
        description: "A query language and runtime for APIs that allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data.",
        tags: ["api", "web", "data"]
    },
    {
        term: "CI/CD",
        description: "Continuous Integration and Continuous Deployment - practices that automate the integration and deployment of code changes to improve development velocity and reliability.",
        tags: ["devops", "automation", "deployment"]
    },
    {
        term: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript, adding static type definitions to help catch errors during development.",
        tags: ["programming", "web", "types"]
    }
];

// Pure function for filtering entries (testable)
function filterGlossaryEntries(entries, query) {
    const searchQuery = query.trim().toLowerCase();
    
    if (searchQuery === '') {
        return entries;
    }
    
    return entries.filter(entry => {
        // Search in term
        if (entry.term.toLowerCase().includes(searchQuery)) {
            return true;
        }
        // Search in description
        if (entry.description.toLowerCase().includes(searchQuery)) {
            return true;
        }
        // Search in tags
        if (entry.tags.some(tag => tag.toLowerCase().includes(searchQuery))) {
            return true;
        }
        return false;
    });
}

// Function to render glossary entries
function renderGlossary(filterQuery = '') {
    const container = document.getElementById('glossary-container');
    
    if (!container) {
        console.error('Glossary container not found');
        return;
    }

    // Filter entries based on search query
    const filteredEntries = filterGlossaryEntries(glossaryEntries, filterQuery);

    // Display no results message if filtered array is empty
    if (filteredEntries.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-600 text-lg">No results found</p>
                <p class="text-gray-500 text-sm mt-2">Try a different search term</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredEntries.map(entry => `
        <article class="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow border border-gray-200">
            <h2 class="text-lg font-extrabold text-gray-900 mb-2.5 leading-snug tracking-tight border-b border-gray-100 pb-2">${entry.term}</h2>
            <p class="text-gray-800 mb-3.5 text-sm leading-relaxed font-normal max-w-none">${entry.description}</p>
            <div class="flex flex-wrap gap-1.5 pt-0.5">
                ${entry.tags.map(tag => `
                    <span class="px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-md uppercase tracking-wider">
                        ${tag}
                    </span>
                `).join('')}
            </div>
        </article>
    `).join('');
}

// Initialize glossary when DOM is loaded (only in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Initial render with all entries
        renderGlossary();
        
        // Add search event listener
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                renderGlossary(query);
            });
        }
    });
}

// Export for testing
export { filterGlossaryEntries, glossaryEntries };

