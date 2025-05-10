/**
 * Click Contract Portal - Signing Integration
 * 
 * This script handles the contract signing functionality for the Click Contract Portal.
 * It manages the contract templates and signing process.
 */

// Configuration for Click Contract Portal
const clickContractConfig = {
    // Base URL for the Click Contract Portal signing service
    baseUrl: 'https://sign.clickconstruction.com',
    
    // Template IDs for different contract types
    // These connect to specific contract templates in the system
    templates: {
        'service-agreement': 'template_1',
        'nda': 'template_2',
        'employment': 'template_3',
        'rental': 'template_4',
        'sales': 'template_5',
        'consulting': 'template_6'
    }
};

/**
 * Opens the Click Contract Portal signing interface for the selected contract
 * @param {string} contractType - The type of contract to sign
 */
function openDocuSeal(contractType) {
    // Get the template ID for the selected contract
    const templateId = clickContractConfig.templates[contractType];
    
    if (!templateId) {
        console.error(`Template ID not found for contract type: ${contractType}`);
        alert('Sorry, this contract is not available for signing at the moment.');
        return;
    }
    
    // Generate the signing URL for this contract
    const signingUrl = `${clickContractConfig.baseUrl}/sign/${templateId}`;
    
    // For this example, we'll show an alert with information
    // In production, this would directly open the signing interface
    alert(`You will be redirected to our secure signing interface to complete the ${contractType.replace('-', ' ')} contract.`);
    
    // Uncomment this line to actually redirect to the signing URL in production
    // window.location.href = signingUrl;
    
    // Alternative: Open in a new tab
    // window.open(signingUrl, '_blank');
    
    // Alternative: Open in a modal (requires additional HTML)
    // openSigningModal(signingUrl, contractType);
}

/**
 * Opens a modal with an embedded signing form
 * This is an alternative to redirecting to the signing URL
 * @param {string} signingUrl - The URL for the signing form
 * @param {string} contractType - The type of contract being signed
 */
function openSigningModal(signingUrl, contractType) {
    // This is a placeholder function for demonstration purposes
    // In a real implementation, you would create a modal with an iframe or
    // use the DocuSeal embedded signing form JavaScript library
    
    console.log(`Opening modal for ${contractType} with URL: ${signingUrl}`);
    
    // Example of how you might implement this with Bootstrap modals
    // (requires additional HTML structure)
    /*
    const modalTitle = document.getElementById('signingModalLabel');
    const modalIframe = document.getElementById('signingIframe');
    
    modalTitle.textContent = `Sign ${contractType.replace('-', ' ')}`;
    modalIframe.src = signingUrl;
    
    const signingModal = new bootstrap.Modal(document.getElementById('signingModal'));
    signingModal.show();
    */
}

/**
 * Example of how to use the Click Contract Portal JavaScript SDK for embedded signing
 * @param {string} contractType - The type of contract to sign
 */
function useEmbeddedSigning(contractType) {
    // This is a placeholder function for the embedded signing feature
    // In a full implementation, this would use our JavaScript SDK
    
    console.log(`Using embedded signing for ${contractType}`);
    
    // Example of how this would be implemented with our SDK
    /*
    const templateId = clickContractConfig.templates[contractType];
    
    // Initialize the Click Contract Portal embedded signing form
    ClickContract.Embed({
        targetElement: document.getElementById('docuseal-container'),
        templateId: templateId,
        submitterEmail: 'user@example.com', // This could be collected from a form
        submitterName: 'John Doe', // This could be collected from a form
        onComplete: function(data) {
            console.log('Signing completed', data);
            alert('Document signed successfully! You will receive a copy via email.');
        },
        onError: function(error) {
            console.error('Signing error', error);
            alert('An error occurred during signing. Please try again.');
        }
    });
    */
}

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contract Signing Portal initialized');
    
    // You could add additional initialization code here
    // For example, fetching available templates from DocuSeal API
});
