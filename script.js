// Dark mode detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

class CriticalThinkingApp {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 7;
        this.responses = {};
        this.init();
    }

    init() {
        this.updateUI();
        this.bindEvents();
    }

    bindEvents() {
        // Add both click and touch events for better mobile experience
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        // Next button
        nextBtn.addEventListener('click', () => this.nextStep());
        nextBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.nextStep();
        });
        
        // Previous button
        prevBtn.addEventListener('click', () => this.prevStep());
        prevBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.prevStep();
        });
        
        // Reset button
        resetBtn.addEventListener('click', () => this.reset());
        resetBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.reset();
        });

        // Back to Step 7 button (in summary view)
        const backToStep7Btn = document.getElementById('backToStep7');
        if (backToStep7Btn) {
            backToStep7Btn.addEventListener('click', () => {
                this.currentStep = 7;
                this.updateUI();
            });
            backToStep7Btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.currentStep = 7;
                this.updateUI();
            });
        }

        // Auto-save responses
        document.addEventListener('input', (e) => {
            if (e.target.tagName === 'TEXTAREA') {
                this.saveResponse(e.target.id, e.target.value);
            }
        });
        
        // Add touch support for step indicators
        const stepIndicators = document.querySelectorAll('.step-indicator');
        stepIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToStep(parseInt(indicator.dataset.step));
            });
            indicator.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.goToStep(parseInt(indicator.dataset.step));
            });
        });
    }
    
    // Method to go to a specific step
    goToStep(stepNumber) {
        if (stepNumber >= 1 && stepNumber <= this.totalSteps) {
            this.currentStep = stepNumber;
            this.updateUI();
        }
    }

    saveResponse(fieldId, value) {
        this.responses[fieldId] = value;
    }

    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
        } else if (this.currentStep === this.totalSteps) {
            this.showSummary();
            return;
        }
        this.updateUI();
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateUI();
        }
    }

    updateUI() {
        // Hide all step contents
        document.querySelectorAll('.step-content').forEach(el => {
            el.classList.add('hidden');
        });

        // Show current step
        const currentStepElement = document.getElementById(`step${this.currentStep}`);
        if (currentStepElement) {
            currentStepElement.classList.remove('hidden');
            currentStepElement.classList.add('fade-in');
        }

        // Update progress
        const progress = (this.currentStep / this.totalSteps) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
        document.getElementById('progressText').textContent = `${this.currentStep}/${this.totalSteps} 단계`;

        // Update step indicators
        document.querySelectorAll('.step-indicator').forEach((el, index) => {
            el.classList.remove('step-active');
            if (index + 1 === this.currentStep) {
                el.classList.add('step-active');
            }
        });

        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.currentStep === 1;
        const nextBtn = document.getElementById('nextBtn');
        
        // Make sure next button is visible (in case we came back from summary view)
        nextBtn.style.display = 'block';
        
        if (this.currentStep === this.totalSteps) {
            nextBtn.textContent = '요약 보기 →';
        } else {
            nextBtn.textContent = '다음 →';
        }

        // Restore saved responses
        this.restoreResponses();
    }

    restoreResponses() {
        Object.keys(this.responses).forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.value = this.responses[fieldId];
            }
        });
    }

    showSummary() {
        document.querySelectorAll('.step-content').forEach(el => {
            el.classList.add('hidden');
        });

        const summaryElement = document.getElementById('summary');
        summaryElement.classList.remove('hidden');

        this.generateSummary();

        // Update progress to 100%
        document.getElementById('progressBar').style.width = '100%';
        document.getElementById('progressText').textContent = '완료!';

        // Update navigation - hide the next button since we're in summary view
        // but make sure it can be shown again when navigating back
        document.getElementById('nextBtn').style.display = 'none';
    }

    generateSummary() {
        const summaryContent = document.getElementById('summaryContent');
        
        const sections = [
            { title: '🎯 문제 정의', fields: ['problem', 'importance'] },
            { title: '📊 정보 분석', fields: ['knownFacts', 'neededInfo'] },
            { title: '🤔 가정 검토', fields: ['assumptions', 'assumptionValidity'] },
            { title: '👥 다양한 관점', fields: ['stakeholderViews', 'counterArguments'] },
            { title: '⚖️ 논증 평가', fields: ['strongArguments', 'weakArguments'] },
            { title: '💡 결론', fields: ['conclusion', 'limitations'] },
            { title: '🚀 행동 계획', fields: ['actionSteps', 'successMetrics'] }
        ];

        let summaryHTML = '';

        sections.forEach(section => {
            const hasContent = section.fields.some(field => this.responses[field]?.trim());
            if (hasContent) {
                summaryHTML += `
                    <div class="summary-item bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h3 class="font-semibold mb-3">${section.title}</h3>
                        <div class="space-y-2 text-sm">
                `;
                
                section.fields.forEach(field => {
                    if (this.responses[field]?.trim()) {
                        summaryHTML += `
                            <div class="bg-white dark:bg-gray-600 p-3 rounded border-l-4 border-primary">
                                ${this.responses[field].replace(/\n/g, '<br>')}
                            </div>
                        `;
                    }
                });
                
                summaryHTML += `
                        </div>
                    </div>
                `;
            }
        });

        if (!summaryHTML) {
            summaryHTML = `
                <div class="text-center text-gray-500 dark:text-gray-400 py-8">
                    <p>아직 입력된 내용이 없습니다.</p>
                    <p class="text-sm mt-2">이전 단계로 돌아가서 내용을 입력해주세요.</p>
                </div>
            `;
        }

        summaryContent.innerHTML = summaryHTML;
    }

    reset() {
        this.showConfirmDialog(
            '모든 내용이 삭제됩니다. 정말 다시 시작하시겠습니까?',
            () => {
                this.currentStep = 1;
                this.responses = {};
                
                // Clear all inputs
                document.querySelectorAll('textarea').forEach(el => {
                    el.value = '';
                });
                
                // Reset navigation
                document.getElementById('nextBtn').style.display = 'block';
                document.getElementById('nextBtn').textContent = '다음 →';
                
                this.updateUI();
            }
        );
    }

    showConfirmDialog(message, onConfirm) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                <p class="text-gray-700 dark:text-gray-300 mb-4">${message}</p>
                <div class="flex justify-end space-x-3">
                    <button class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" onclick="this.closest('.fixed').remove()">취소</button>
                    <button class="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded" onclick="this.closest('.fixed').remove(); onConfirm()">확인</button>
                </div>
            </div>
        `;
        
        // Add event listener to the confirm button
        const confirmBtn = modal.querySelector('.bg-red-500');
        confirmBtn.addEventListener('click', () => {
            modal.remove();
            onConfirm();
        });
        
        document.body.appendChild(modal);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new CriticalThinkingApp();
});