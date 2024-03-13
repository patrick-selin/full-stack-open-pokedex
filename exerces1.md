### CI tools for Go development

I chose Go as the language of this project. I don’t know anything about it before googling.

We should setup linting, testing and make the build process. In the Go ecosystem, for linting, popular tools like golangci-lint and staticcheck are widely used.  I would chose the first one, because it seems to be the most used. These tools analyze Go source code for potential errors, style violations, and other issues to ensure code quality and maintainability. 

For testing, the standard Go testing package Testing provides a great framework for writing and executing tests. Additionally, tools like testify and Ginkgo offer extended functionalities, like assertion.

For the building process, we could use the language's native tools that includes go build and go install, which compile and install Go packages respectively, making them suitable for use in CI pipelines.


### What alternatives are there to set up the CI, besides Jenkins and GitHub Actions? 

Some popular options include Travis CI, CircleCI, GitLab CI/CD, and Bitbucket Pipelines. 
These platforms offer tools like: version control systems, flexibility in configuration, scalability, and support for parellel execution, allowing the team to choose the one that best fits their requirements and preference.


## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Self-hosted solutions offer greater control over the infrastructure, including hardvare, network configurations, and security policies. They suit organizations with specific requirements. However, self-hosted solutions require upfront investment in hardware, maintenance, and ongoing support. 

But, cloud-based CI platforms provide scalability, ease of setup, maintenance, and integration with other cloud services. They offer pay-as-you-go pricing models, making them cost-effective for small to medium-sized teams. 

We will choose a cloud-based approach with the project. 
