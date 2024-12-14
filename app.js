class AuroraEditor {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 1;
        this.currentImageToResize = null;
        this.editors = [];
        this.currentDocumentTitle = '';
        this.init();
    }

    init() {
        this.setupToolbar();
        this.createInitialPage();
        this.setupEventListeners();
        this.setupImageResizing();
        this.loadDocuments();
        this.setupPageNavigation();
    }

    setupToolbar() {
        this.toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
            ['clean']
        ];
    }

    createInitialPage() {
        const editorContainer = document.getElementById('editor-container');
        const firstPage = this.createNewPageElement(1);
        editorContainer.appendChild(firstPage);
        
        const editor = new Quill(firstPage.querySelector('.editor'), {
            modules: {
                toolbar: this.toolbarOptions
            },
            theme: 'snow',
            placeholder: 'Comece a escrever...'
        });
        
        this.editors.push(editor);
    }

    createNewPageElement(pageNumber) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        
        const editorDiv = document.createElement('div');
        editorDiv.className = 'editor';
        pageDiv.appendChild(editorDiv);
        
        const pageNumberDiv = document.createElement('div');
        pageNumberDiv.className = 'page-number';
        pageNumberDiv.textContent = `Página ${pageNumber}`;
        pageDiv.appendChild(pageNumberDiv);
        
        return pageDiv;
    }

    setupEventListeners() {
        document.getElementById('newPageBtn').addEventListener('click', () => {
            this.addNewPage();
        });

        document.querySelector('[data-action="new"]').addEventListener('click', () => {
            this.createNewDocument();
        });

        document.querySelector('[data-action="save"]').addEventListener('click', () => {
            this.saveDocument();
        });

        document.querySelector('[data-action="export-pdf"]').addEventListener('click', () => {
            this.exportToPDF();
        });
        
        document.querySelector('[data-action="export-docx"]').addEventListener('click', () => {
            this.exportToWord();
        });
        
        document.querySelector('[data-action="export-txt"]').addEventListener('click', () => {
            this.exportToText();
        });

        document.getElementById('documentTitle').addEventListener('input', (e) => {
            this.currentDocumentTitle = e.target.value;
        });
    }

    addNewPage() {
        const editorContainer = document.getElementById('editor-container');
        const newPage = this.createNewPageElement(this.totalPages + 1);
        editorContainer.appendChild(newPage);
        
        const editor = new Quill(newPage.querySelector('.editor'), {
            modules: {
                toolbar: this.toolbarOptions
            },
            theme: 'snow'
        });
        
        this.editors.push(editor);
        this.totalPages++;
        this.updatePageNavigation();
        newPage.scrollIntoView({ behavior: 'smooth' });
    }

    setupPageNavigation() {
        const prevPageBtn = document.getElementById('prevPageBtn');
        const nextPageBtn = document.getElementById('nextPageBtn');

        prevPageBtn.addEventListener('click', () => this.goToPreviousPage());
        nextPageBtn.addEventListener('click', () => this.goToNextPage());
        
        this.updatePageNavigation();
    }

    updatePageNavigation() {
        const prevPageBtn = document.getElementById('prevPageBtn');
        const nextPageBtn = document.getElementById('nextPageBtn');
        const pageIndicator = document.getElementById('pageIndicator');

        pageIndicator.textContent = `Página ${this.currentPage} de ${this.totalPages}`;
        prevPageBtn.disabled = this.currentPage <= 1;
        nextPageBtn.disabled = this.currentPage >= this.totalPages;
    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.scrollToPage(this.currentPage);
        }
    }

    goToNextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.scrollToPage(this.currentPage);
        }
    }

    scrollToPage(pageNumber) {
        const pages = document.querySelectorAll('.page');
        if (pages[pageNumber - 1]) {
            pages[pageNumber - 1].scrollIntoView({ behavior: 'smooth' });
            this.updatePageNavigation();
        }
    }

    setupImageResizing() {
        document.addEventListener('click', (event) => {
            const image = event.target.closest('img');
            if (image && image.closest('.editor')) {
                this.currentImageToResize = image;
                document.getElementById('image-resize-modal').style.display = 'block';
                document.getElementById('image-size-slider').value = 100;
            }
        });

        document.getElementById('apply-image-resize').addEventListener('click', () => {
            if (this.currentImageToResize) {
                const sizeValue = document.getElementById('image-size-slider').value;
                this.currentImageToResize.style.width = `${sizeValue}%`;
                document.getElementById('image-resize-modal').style.display = 'none';
            }
        });

        document.getElementById('cancel-image-resize').addEventListener('click', () => {
            document.getElementById('image-resize-modal').style.display = 'none';
        });
    }

    async exportToPDF() {
        const content = document.createElement('div');
        this.editors.forEach(editor => {
            const pageDiv = document.createElement('div');
            pageDiv.className = 'page-for-pdf';
            pageDiv.innerHTML = editor.root.innerHTML;
            content.appendChild(pageDiv);
        });

        const opt = {
            margin: 1,
            filename: `${this.currentDocumentTitle || 'documento'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(content).save();
        } catch (error) {
            console.error('Erro ao exportar PDF:', error);
            alert('Erro ao exportar PDF. Tente novamente.');
        }
    }

    exportToWord() {
        const content = this.editors.map(editor => editor.root.innerHTML).join('<br clear="all" style="page-break-before:always">');
        const html = `
            <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: Arial, sans-serif; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </head>
                <body>${content}</body>
            </html>
        `;
        
        const blob = new Blob([html], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.currentDocumentTitle || 'documento'}.doc`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    exportToText() {
        const content = this.editors.map(editor => editor.getText()).join('\n\n--- Nova Página ---\n\n');
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.currentDocumentTitle || 'documento'}.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    createNewDocument() {
        const documentName = prompt('Nome do novo documento:');
        if (documentName) {
            this.currentDocumentTitle = documentName;
            document.getElementById('documentTitle').value = documentName;
            this.editors = [];
            document.getElementById('editor-container').innerHTML = '';
            this.currentPage = 1;
            this.totalPages = 1;
            this.createInitialPage();
        }
    }

    saveDocument() {
        const documentName = this.currentDocumentTitle || document.getElementById('documentTitle').value || 'Documento sem título';
        const pagesContent = this.editors.map(editor => editor.root.innerHTML);
        
        const document = {
            id: Date.now(),
            name: documentName,
            content: pagesContent,
            createdAt: new Date().toISOString()
        };

        this.saveDocumentToList(document);
        alert('Documento salvo com sucesso!');
    }

    saveDocumentToList(document) {
        let documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
        documents.push(document);
        localStorage.setItem('auroraDocuments', JSON.stringify(documents));
        this.loadDocuments();
    }

    loadDocuments() {
        const documentList = document.getElementById('documentList');
        const documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
        
        documentList.innerHTML = documents.map(doc => `
            <li>
                <span>${doc.name}</span>
                <div class="document-actions">
                    <button onclick="window.editor.loadDocument(${doc.id})">Abrir</button>
                    <button onclick="window.editor.deleteDocument(${doc.id})">Excluir</button>
                </div>
            </li>
        `).join('');
    }

    loadDocument(id) {
        const documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
        const document = documents.find(doc => doc.id === id);
        
        if (document) {
            this.currentDocumentTitle = document.name;
            document.getElementById('documentTitle').value = document.name;
            
            this.editors = [];
            document.getElementById('editor-container').innerHTML = '';
            
            document.content.forEach((pageContent, index) => {
                if (index === 0) {
                    this.createInitialPage();
                    this.editors[0].root.innerHTML = pageContent;
                } else {
                    this.addNewPage();
                    this.editors[index].root.innerHTML = pageContent;
                }
            });
            
            this.currentPage = 1;
            this.updatePageNavigation();
        }
    }

    deleteDocument(id) {
        if (confirm('Tem certeza que deseja excluir este documento?')) {
            let documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
            documents = documents.filter(doc => doc.id !== id);
            localStorage.setItem('auroraDocuments', JSON.stringify(documents));
            this.loadDocuments();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.editor = new AuroraEditor();
});