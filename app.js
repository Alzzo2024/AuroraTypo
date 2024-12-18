class AuroraEditor {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.currentPage = 1;
        this.totalPages = 1;
        this.currentImageToResize = null;
        this.editors = [];
        this.currentDocumentTitle = '';
        this.currentLanguage = localStorage.getItem('preferredLanguage') || 'pt';
        this.translations = {
            en: {
                newDocument: 'New',
                save: 'Save',
                documents: 'Documents',
                export: 'Export',
                language: 'Language',
                documentTitle: 'Document title',
                newPage: 'New Page',
                documentsList: 'Documents List',
                imageResize: 'Resize Image',
                apply: 'Apply',
                cancel: 'Cancel',
                selectLanguage: 'Select Language',
                extra: 'Extra'
            },
            pt: {
                newDocument: 'Novo',
                save: 'Salvar',
                documents: 'Documentos',
                export: 'Exportar',
                language: 'Idioma',
                documentTitle: 'Título do documento',
                newPage: 'Nova Página',
                documentsList: 'Lista de Documentos',
                imageResize: 'Redimensionar Imagem',
                apply: 'Aplicar',
                cancel: 'Cancelar',
                selectLanguage: 'Selecionar Idioma',
                extra: 'Extra'
            },
            es: {
                newDocument: 'Nuevo',
                save: 'Guardar',
                documents: 'Documentos',
                export: 'Exportar',
                language: 'Idioma',
                documentTitle: 'Título del documento',
                newPage: 'Nueva Página',
                documentsList: 'Lista de Documentos',
                imageResize: 'Redimensionar Imagen',
                apply: 'Aplicar',
                cancel: 'Cancelar',
                selectLanguage: 'Seleccionar Idioma',
                extra: 'Extra'
            },
            fr: {
                newDocument: 'Nouveau',
                save: 'Enregistrer',
                documents: 'Documents',
                export: 'Exporter',
                language: 'Langue',
                documentTitle: 'Titre du document',
                newPage: 'Nouvelle Page',
                documentsList: 'Liste des Documents',
                imageResize: 'Redimensionner l\'Image',
                apply: 'Appliquer',
                cancel: 'Annuler',
                selectLanguage: 'Sélectionner la Langue',
                extra: 'Extra'
            },
            de: {
                newDocument: 'Neu',
                save: 'Speichern',
                documents: 'Dokumente',
                export: 'Exportieren',
                language: 'Sprache',
                documentTitle: 'Dokumenttitel',
                newPage: 'Neue Seite',
                documentsList: 'Dokumentenliste',
                imageResize: 'Bildgröße ändern',
                apply: 'Anwenden',
                cancel: 'Abbrechen',
                selectLanguage: 'Sprache auswählen',
                extra: 'Extra'
            },
            it: {
                newDocument: 'Nuovo',
                save: 'Salva',
                documents: 'Documenti',
                export: 'Esporta',
                language: 'Lingua',
                documentTitle: 'Titolo del documento',
                newPage: 'Nuova Pagina',
                documentsList: 'Lista Documenti',
                imageResize: 'Ridimensiona Immagine',
                apply: 'Applica',
                cancel: 'Annulla',
                selectLanguage: 'Seleziona Lingua',
                extra: 'Extra'
            },
            zh: {
                newDocument: '新建',
                save: '保存',
                documents: '文档',
                export: '导出',
                language: '语言',
                documentTitle: '文档标题',
                newPage: '新页面',
                documentsList: '文档列表',
                imageResize: '调整图片大小',
                apply: '应用',
                cancel: '取消',
                selectLanguage: '选择语言',
                extra: '额外'
            },
            ja: {
                newDocument: '新規',
                save: '保存',
                documents: '文書',
                export: 'エクスポート',
                language: '言語',
                documentTitle: '文書タイトル',
                newPage: '新しいページ',
                documentsList: '文書リスト',
                imageResize: '画像サイズ変更',
                apply: '適用',
                cancel: 'キャンセル',
                selectLanguage: '言語選択',
                extra: '追加'
            },
            ko: {
                newDocument: '새로 만들기',
                save: '저장',
                documents: '문서',
                export: '내보내기',
                language: '언어',
                documentTitle: '문서 제목',
                newPage: '새 페이지',
                documentsList: '문서 목록',
                imageResize: '이미지 크기 조정',
                apply: '적용',
                cancel: '취소',
                selectLanguage: '언어 선택',
                extra: '추가'
            },
            ru: {
                newDocument: 'Новый',
                save: 'Сохранить',
                documents: 'Документы',
                export: 'Экспорт',
                language: 'Язык',
                documentTitle: 'Название документа',
                newPage: 'Новая страница',
                documentsList: 'Список документов',
                imageResize: 'Изменить размер изображения',
                apply: 'Применить',
                cancel: 'Отмена',
                selectLanguage: 'Выбрать язык',
                extra: 'Дополнительно'
            },
            hu: {
                newDocument: 'Új',
                save: 'Mentés',
                documents: 'Dokumentumok',
                export: 'Exportálás',
                language: 'Nyelv',
                documentTitle: 'Dokumentum címe',
                newPage: 'Új oldal',
                documentsList: 'Dokumentumok listája',
                imageResize: 'Kép átméretezése',
                apply: 'Alkalmaz',
                cancel: 'Mégse',
                selectLanguage: 'Nyelv kiválasztása',
                extra: 'Extra'
            },
            he: {
                newDocument: 'חדש',
                save: 'שמור',
                documents: 'מסמכים',
                export: 'ייצוא',
                language: 'שפה',
                documentTitle: 'כותרת המסמך',
                newPage: 'דף חדש',
                documentsList: 'רשימת מסמכים',
                imageResize: 'שינוי גודל תמונה',
                apply: 'החל',
                cancel: 'ביטול',
                selectLanguage: 'בחר שפה',
                extra: 'נוסף'
            },
            ar: {
                newDocument: 'جديد',
                save: 'حفظ',
                documents: 'المستندات',
                export: 'تصدير',
                language: 'اللغة',
                documentTitle: 'عنوان المستند',
                newPage: 'صفحة جديدة',
                documentsList: 'قائمة المستندات',
                imageResize: 'تغيير حجم الصورة',
                apply: 'تطبيق',
                cancel: 'إلغاء',
                selectLanguage: 'اختر اللغة',
                extra: 'إضافي'
            },
            hi: {
                newDocument: 'नया',
                save: 'सहेजें',
                documents: 'दस्तावेज़',
                export: 'निर्यात',
                language: 'भाषा',
                documentTitle: 'दस्तावेज़ का शीर्षक',
                newPage: 'नया पृष्ठ',
                documentsList: 'दस्तावेज़ों की सूची',
                imageResize: 'छवि का आकार बदलें',
                apply: 'लागू करें',
                cancel: 'रद्द करें',
                selectLanguage: 'भाषा चुनें',
                extra: 'अतिरिक्त'
            },
            sl: {
                newDocument: 'Nov',
                save: 'Shrani',
                documents: 'Dokumenti',
                export: 'Izvozi',
                language: 'Jezik',
                documentTitle: 'Naslov dokumenta',
                newPage: 'Nova stran',
                documentsList: 'Seznam dokumentov',
                imageResize: 'Spremeni velikost slike',
                apply: 'Uporabi',
                cancel: 'Prekliči',
                selectLanguage: 'Izberi jezik',
                extra: 'Dodatno'
            },
            da: {
                newDocument: 'Ny',
                save: 'Gem',
                documents: 'Dokumenter',
                export: 'Eksporter',
                language: 'Sprog',
                documentTitle: 'Dokumenttitel',
                newPage: 'Ny side',
                documentsList: 'Dokumentliste',
                imageResize: 'Tilpas billedstørrelse',
                apply: 'Anvend',
                cancel: 'Annuller',
                selectLanguage: 'Vælg sprog',
                extra: 'Ekstra'
            },
            tr: {
                newDocument: 'Yeni',
                save: 'Kaydet',
                documents: 'Belgeler',
                export: 'Dışa Aktar',
                language: 'Dil',
                documentTitle: 'Belge başlığı',
                newPage: 'Yeni Sayfa',
                documentsList: 'Belge Listesi',
                imageResize: 'Görüntü Boyutunu Değiştir',
                apply: 'Uygula',
                cancel: 'İptal',
                selectLanguage: 'Dil Seç',
                extra: 'Ekstra'
            },
            eo: {
                newDocument: 'Nova',
                save: 'Konservi',
                documents: 'Dokumentoj',
                export: 'Eksporti',
                language: 'Lingvo',
                documentTitle: 'Dokumenta titolo',
                newPage: 'Nova paĝo',
                documentsList: 'Dokumenta listo',
                imageResize: 'Ŝanĝi bildan grandecon',
                apply: 'Apliki',
                cancel: 'Nuligi',
                selectLanguage: 'Elektu lingvon',
                extra: 'Ekstra'
            }
        };        
        this.init();
    }

    init() {
        this.setupToolbar();
        this.createInitialPage();
        this.setupEventListeners();
        this.setupImageResizing();
        this.loadDocuments();
        this.setupPageNavigation();
        this.setupLanguageSelector();
        this.updateUILanguage();
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
            placeholder: '...'
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
        pageNumberDiv.textContent = `${this.translations[this.currentLanguage].page || 'Página'} ${pageNumber}`;
        pageDiv.appendChild(pageNumberDiv);
        
        return pageDiv;
    }

    setupEventListeners() {
        document.getElementById('newPageBtn').addEventListener('click', () => this.addNewPage());
        document.querySelector('[data-action="new"]').addEventListener('click', () => this.createNewDocument());
        document.querySelector('[data-action="save"]').addEventListener('click', () => this.saveDocument());
        document.querySelector('[data-action="export-pdf"]').addEventListener('click', () => this.exportToPDF());
        document.querySelector('[data-action="export-docx"]').addEventListener('click', () => this.exportToWord());
        document.querySelector('[data-action="export-txt"]').addEventListener('click', () => this.exportToText());
        document.getElementById('documentTitle').addEventListener('input', (e) => {
            this.currentDocumentTitle = e.target.value;
        });
        
        if (this.isMobile) {
            document.querySelector('[data-action="documents"]').addEventListener('click', () => {
                document.querySelector('.document-management').classList.toggle('active');
            });
        }
    }

    setupLanguageSelector() {
        const languageBtn = document.querySelector('[data-action="language"]');
        const languageModal = document.getElementById('language-modal');
        
        languageBtn.addEventListener('click', () => {
            languageModal.style.display = 'block';
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                languageModal.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target === languageModal) {
                languageModal.style.display = 'none';
            }
        });
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        this.updateUILanguage();
    }

    updateUILanguage() {
        const translations = this.translations[this.currentLanguage];
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
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

        pageIndicator.textContent = `${this.currentPage}/${this.totalPages}`;
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
            alert('Erro.');
        }
    }

    exportToWord() {
        const content = this.editors.map(editor => editor.root.innerHTML)
            .join('<br clear="all" style="page-break-before:always">');
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
        const content = this.editors.map(editor => editor.getText())
            .join('\n\n--- Nova Página ---\n\n');
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.currentDocumentTitle || 'documento'}.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    createNewDocument() {
        const documentName = prompt(this.translations[this.currentLanguage].newDocumentPrompt || 'Nome do novo documento:');
        if (documentName) {
            this.currentDocumentTitle = documentName;
            document.getElementById('documentTitle').value = documentName;
            this.editors = [];
            document.getElementById('editor-container').innerHTML = '';
            this.currentPage = 1;
            this.totalPages = 1;
            this.createInitialPage();
            this.updatePageNavigation();
        }
    }

    saveDocument() {
        const documentName = this.currentDocumentTitle || 
                           document.getElementById('documentTitle').value || 
                           this.translations[this.currentLanguage].untitledDocument || 
                           'No title!';
        const pagesContent = this.editors.map(editor => editor.root.innerHTML);
        
        const document = {
            id: Date.now(),
            name: documentName,
            content: pagesContent,
            createdAt: new Date().toISOString()
        };

        this.saveDocumentToList(document);
        alert(this.translations[this.currentLanguage].documentSaved || '🎉');
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
                    <button onclick="window.editor.loadDocument(${doc.id})">${this.translations[this.currentLanguage].open || 'Abrir'}</button>
                    <button onclick="window.editor.deleteDocument(${doc.id})">${this.translations[this.currentLanguage].delete || 'Excluir'}</button>
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

            if (this.isMobile) {
                document.querySelector('.document-management').classList.remove('active');
            }
        }
    }

    deleteDocument(id) {
        if (confirm(this.translations[this.currentLanguage].confirmDelete || 'Tem certeza que deseja excluir este documento?')) {
            let documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
            documents = documents.filter(doc => doc.id !== id);
            localStorage.setItem('auroraDocuments', JSON.stringify(documents));
            this.loadDocuments();
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    window.editor = new AuroraEditor();
});

// Handle resize events
window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== window.editor.isMobile) {
        window.editor = new AuroraEditor();
    }
});
