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
                extra: 'Extra',
                untitledDocument: 'Untitled Document',
                documentSaved: 'Document saved successfully!',
                confirmDelete: 'Are you sure you want to delete this document?',
                newDocumentPrompt: 'Enter new document name:',
                open: 'Open',
                delete: 'Delete',
                page: 'Page',
                myDocuments: 'My Documents',
                back: 'Back to Editor'
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
                extra: 'Extra',
                untitledDocument: 'Documento sem título',
                documentSaved: 'Documento salvo com sucesso!',
                confirmDelete: 'Tem certeza que deseja excluir este documento?',
                newDocumentPrompt: 'Digite o nome do novo documento:',
                open: 'Abrir',
                delete: 'Excluir',
                page: 'Página',
                myDocuments: 'Meus Documentos',
                back: 'Voltar ao Editor'
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
                extra: 'Extra',
                untitledDocument: 'Documento sin título',
                documentSaved: '¡Documento guardado con éxito!',
                confirmDelete: '¿Está seguro de que desea eliminar este documento?',
                newDocumentPrompt: 'Ingrese el nombre del nuevo documento:',
                open: 'Abrir',
                delete: 'Eliminar',
                page: 'Página',
                myDocuments: 'Mis Documentos',
                back: 'Volver al Editor'
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
                extra: 'Extra',
                untitledDocument: 'Document sans titre',
                documentSaved: 'Document enregistré avec succès!',
                confirmDelete: 'Êtes-vous sûr de vouloir supprimer ce document?',
                newDocumentPrompt: 'Entrez le nom du nouveau document:',
                open: 'Ouvrir',
                delete: 'Supprimer',
                page: 'Page',
                myDocuments: 'Mes Documents',
                back: 'Retour à l\'Éditeur'
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
                extra: 'Extra',
                untitledDocument: 'Unbenanntes Dokument',
                documentSaved: 'Dokument erfolgreich gespeichert!',
                confirmDelete: 'Sind Sie sicher, dass Sie dieses Dokument löschen möchten?',
                newDocumentPrompt: 'Geben Sie den Namen des neuen Dokuments ein:',
                open: 'Öffnen',
                delete: 'Löschen',
                page: 'Seite',
                myDocuments: 'Meine Dokumente',
                back: 'Zurück zum Editor'
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
                extra: 'Extra',
                untitledDocument: 'Documento senza titolo',
                documentSaved: 'Documento salvato con successo!',
                confirmDelete: 'Sei sicuro di voler eliminare questo documento?',
                newDocumentPrompt: 'Inserisci il nome del nuovo documento:',
                open: 'Apri',
                delete: 'Elimina',
                page: 'Pagina',
                myDocuments: 'I Miei Documenti',
                back: 'Torna all\'Editor'
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
                extra: '额外',
                untitledDocument: '无标题文档',
                documentSaved: '文档保存成功！',
                confirmDelete: '确定要删除此文档吗？',
                newDocumentPrompt: '输入新文档名称：',
                open: '打开',
                delete: '删除',
                page: '页',
                myDocuments: '我的文档',
                back: '返回编辑器'
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
                extra: '追加',
                untitledDocument: '無題ドキュメント',
                documentSaved: '文書が正常に保存されました！',
                confirmDelete: 'この文書を削除してもよろしいですか？',
                newDocumentPrompt: '新しい文書名を入力してください：',
                open: '開く',
                delete: '削除',
                page: 'ページ',
                myDocuments: 'マイドキュメント',
                back: 'エディタに戻る'
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
                extra: '추가',
                untitledDocument: '제목 없는 문서',
                documentSaved: '문서가 성공적으로 저장되었습니다!',
                confirmDelete: '이 문서를 삭제하시겠습니까?',
                newDocumentPrompt: '새 문서 이름을 입력하세요:',
                open: '열기',
                delete: '삭제',
                page: '페이지',
                myDocuments: '내 문서',
                back: '편집기로 돌아가기'
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
                extra: 'Дополнительно',
                untitledDocument: 'Безымянный документ',
                documentSaved: 'Документ успешно сохранен!',
                confirmDelete: 'Вы уверены, что хотите удалить этот документ?',
                newDocumentPrompt: 'Введите имя нового документа:',
                open: 'Открыть',
                delete: 'Удалить',
                page: 'Страница',
                myDocuments: 'Мои документы',
                back: 'Вернуться к редактору'
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
                extra: 'Extra',
                untitledDocument: 'Névtelen dokumentum',
                documentSaved: 'A dokumentum sikeresen mentve!',
                confirmDelete: 'Biztosan törli ezt a dokumentumot?',
                newDocumentPrompt: 'Adja meg az új dokumentum nevét:',
                open: 'Megnyitás',
                delete: 'Törlés',
                page: 'Oldal',
                myDocuments: 'Dokumentumaim',
                back: 'Vissza a szerkesztőhöz'
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
                extra: 'נוסף',
                untitledDocument: 'מסמך ללא שם',
                documentSaved: 'המסמך נשמר בהצלחה!',
                confirmDelete: 'האם אתה בטוח שברצונך למחוק מסמך זה?',
                newDocumentPrompt: 'הזן שם למסמך החדש:',
                open: 'פתח',
                delete: 'מחק',
                page: 'עמוד',
                myDocuments: 'המסמכים שלי',
                back: 'חזרה לעורך'
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
                extra: 'إضافي',
                untitledDocument: 'مستند بدون عنوان',
                documentSaved: 'تم حفظ المستند بنجاح!',
                confirmDelete: 'هل أنت متأكد أنك تريد حذف هذا المستند؟',
                newDocumentPrompt: 'أدخل اسم المستند الجديد:',
                open: 'فتح',
                delete: 'حذف',
                page: 'صفحة',
                myDocuments: 'مستنداتي',
                back: 'العودة إلى المحرر'
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
                extra: 'अतिरिक्त',
                untitledDocument: 'अनामांकित दस्तावेज़',
                documentSaved: 'दस्तावेज़ सफलतापूर्वक सहेजा गया!',
                confirmDelete: 'क्या आप वाकई इस दस्तावेज़ को हटाना चाहते हैं?',
                newDocumentPrompt: 'नए दस्तावेज़ का नाम दर्ज करें:',
                open: 'खोलें',
                delete: 'हटाएं',
                page: 'पृष्ठ',
                myDocuments: 'मेरे दस्तावेज़',
                back: 'संपादक पर वापस जाएं'
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
                extra: 'Dodatno',
                untitledDocument: 'Neimenovan dokument',
                documentSaved: 'Dokument uspešno shranjen!',
                confirmDelete: 'Ali ste prepričani, da želite izbrisati ta dokument?',
                newDocumentPrompt: 'Vnesite ime novega dokumenta:',
                open: 'Odpri',
                delete: 'Izbriši',
                page: 'Stran',
                myDocuments: 'Moji dokumenti',
                back: 'Nazaj na urejevalnik'
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
                extra: 'Ekstra',
                untitledDocument: 'Unavngivet dokument',
                documentSaved: 'Dokument gemt med succes!',
                confirmDelete: 'Er du sikker på, at du vil slette dette dokument?',
                newDocumentPrompt: 'Indtast navn på nyt dokument:',
                open: 'Åbn',
                delete: 'Slet',
                page: 'Side',
                myDocuments: 'Mine dokumenter',
                back: 'Tilbage til editor'
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
                extra: 'Ekstra',
                untitledDocument: 'Başlıksız Belge',
                documentSaved: 'Belge başarıyla kaydedildi!',
                confirmDelete: 'Bu belgeyi silmek istediğinizden emin misiniz?',
                newDocumentPrompt: 'Yeni belge adını girin:',
                open: 'Aç',
                delete: 'Sil',
                page: 'Sayfa',
                myDocuments: 'Belgelerim',
                back: 'Düzenleyiciye Dön'
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
                extra: 'Ekstra',
                untitledDocument: 'Sendokumenta dokumento',
                documentSaved: 'Dokumento sukcese konservita!',
                confirmDelete: 'Ĉu vi certas, ke vi volas forigi ĉi tiun dokumenton?',
                newDocumentPrompt: 'Enigu novan dokumentan nomon:',
                open: 'Malfermi',
                delete: 'Forigi',
                page: 'Paĝo',
                myDocuments: 'Miaj dokumentoj',
                back: 'Reen al redaktilo'
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
        if (this.isMobile) {
            new MobileHandler(this);
        }
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
            placeholder: 'Start writing...'
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
        pageNumberDiv.textContent = `${this.translations[this.currentLanguage].page} ${pageNumber}`;
        pageDiv.appendChild(pageNumberDiv);
        
        return pageDiv;
    }

    setupEventListeners() {
        document.getElementById('newPageBtn').addEventListener('click', () => this.addNewPage());
        document.querySelector('[data-action="new"]').addEventListener('click', () => this.createNewDocument());
        document.querySelector('[data-action="save"]').addEventListener('click', () => this.saveDocument());
        document.querySelector('[data-action="documents"]')?.addEventListener('click', () => this.toggleDocumentsList());
        document.querySelector('[data-action="export-pdf"]')?.addEventListener('click', () => this.exportToPDF());
        document.querySelector('[data-action="export-docx"]')?.addEventListener('click', () => this.exportToWord());
        document.querySelector('[data-action="export-txt"]')?.addEventListener('click', () => this.exportToText());
        
        const titleInput = document.getElementById('documentTitle');
        titleInput.addEventListener('input', (e) => {
            this.currentDocumentTitle = e.target.value;
        });
        titleInput.placeholder = this.translations[this.currentLanguage].documentTitle;
    }

    toggleDocumentsList() {
        const docManagement = document.querySelector('.document-management');
        docManagement.classList.toggle('active');
        if (this.isMobile) {
            document.body.style.overflow = docManagement.classList.contains('active') ? 'hidden' : '';
            this.updateMobileDocumentsList();
        }
    }

    updateMobileDocumentsList() {
        if (this.isMobile) {
            const docManagement = document.querySelector('.document-management');
            const documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
            
            docManagement.innerHTML = `
                <div class="mobile-documents-header">
                    <h3>${this.translations[this.currentLanguage].myDocuments}</h3>
                    <button class="close-documents" onclick="window.editor.toggleDocumentsList()">
                        ${this.translations[this.currentLanguage].back}
                    </button>
                </div>
                <ul id="documentList">
                    ${documents.map(doc => `
                        <li>
                            <span>${doc.name}</span>
                            <div class="document-actions">
                                <button onclick="window.editor.loadDocument(${doc.id})">${this.translations[this.currentLanguage].open}</button>
                                <button onclick="window.editor.deleteDocument(${doc.id})">${this.translations[this.currentLanguage].delete}</button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            `;
        }
    }

    setupLanguageSelector() {
        const languageBtn = document.querySelector('[data-action="language"]');
        const languageModal = document.getElementById('language-modal');
        
        languageBtn?.addEventListener('click', () => {
            languageModal.style.display = 'block';
            if (this.isMobile) {
                document.body.style.overflow = 'hidden';
            }
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                this.changeLanguage(lang);
                languageModal.style.display = 'none';
                if (this.isMobile) {
                    document.body.style.overflow = '';
                    this.updateMobileDocumentsList();
                }
            });
        });

        // Close modal when clicking outside
        languageModal.addEventListener('click', (e) => {
            if (e.target === languageModal) {
                languageModal.style.display = 'none';
                if (this.isMobile) {
                    document.body.style.overflow = '';
                }
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
                if (element.tagName.toLowerCase() === 'input' && element.type === 'text') {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });

        // Update page numbers
        document.querySelectorAll('.page-number').forEach((pageNum, index) => {
            pageNum.textContent = `${translations.page} ${index + 1}`;
        });

        // Update mobile elements if needed
        if (this.isMobile) {
            this.updateMobileDocumentsList();
        }
    }

    setupPageNavigation() {
        const prevPageBtn = document.getElementById('prevPageBtn');
        const nextPageBtn = document.getElementById('nextPageBtn');
        const pageIndicator = document.getElementById('pageIndicator');

        prevPageBtn.addEventListener('click', () => this.goToPreviousPage());
        nextPageBtn.addEventListener('click', () => this.goToNextPage());
        
        this.updatePageNavigation();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.goToPreviousPage();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.goToNextPage();
                }
            }
        });
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
            this.currentPage = pageNumber;
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
        this.currentPage = this.totalPages;
        this.updatePageNavigation();
        newPage.scrollIntoView({ behavior: 'smooth' });
    }

    setupImageResizing() {
        const modal = document.getElementById('image-resize-modal');
        const slider = document.getElementById('image-size-slider');
        const applyBtn = document.getElementById('apply-image-resize');
        const cancelBtn = document.getElementById('cancel-image-resize');

        document.addEventListener('click', (event) => {
            const image = event.target.closest('img');
            if (image && image.closest('.editor')) {
                this.currentImageToResize = image;
                modal.style.display = 'block';
                slider.value = 100;
            }
        });

        applyBtn.addEventListener('click', () => {
            if (this.currentImageToResize) {
                const sizeValue = slider.value;
                this.currentImageToResize.style.width = `${sizeValue}%`;
                modal.style.display = 'none';
            }
        });

        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Preview size while sliding
        slider.addEventListener('input', () => {
            if (this.currentImageToResize) {
                this.currentImageToResize.style.width = `${slider.value}%`;
            }
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
            filename: `${this.currentDocumentTitle || 'document'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(content).save();
        } catch (error) {
            console.error('Error exporting PDF:', error);
            alert('Error exporting PDF. Please try again.');
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
        link.download = `${this.currentDocumentTitle || 'document'}.doc`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    exportToText() {
        const content = this.editors.map(editor => editor.getText())
            .join('\n\n--- New Page ---\n\n');
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.currentDocumentTitle || 'document'}.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    createNewDocument() {
        const documentName = prompt(this.translations[this.currentLanguage].newDocumentPrompt);
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
                           this.translations[this.currentLanguage].untitledDocument;
        const pagesContent = this.editors.map(editor => editor.root.innerHTML);
        
        const document = {
            id: Date.now(),
            name: documentName,
            content: pagesContent,
            createdAt: new Date().toISOString()
        };

        this.saveDocumentToList(document);
        alert(this.translations[this.currentLanguage].documentSaved);
    }

    saveDocumentToList(document) {
        let documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
        documents.push(document);
        localStorage.setItem('auroraDocuments', JSON.stringify(documents));
        this.loadDocuments();
    }

    loadDocuments() {
        const documents = JSON.parse(localStorage.getItem('auroraDocuments') || '[]');
        this.updateDocumentsList(documents);
    }

    updateDocumentsList(documents) {
        const documentList = document.getElementById('documentList');
        documentList.innerHTML = documents.map(doc => `
            <li>
                <span>${doc.name}</span>
                <div class="document-actions">
                    <button onclick="window.editor.loadDocument(${doc.id})">${this.translations[this.currentLanguage].open}</button>
                    <button onclick="window.editor.deleteDocument(${doc.id})">${this.translations[this.currentLanguage].delete}</button>
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
            this.toggleDocumentsList();
        }
    }

    deleteDocument(id) {
        if (confirm(this.translations[this.currentLanguage].confirmDelete)) {
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
