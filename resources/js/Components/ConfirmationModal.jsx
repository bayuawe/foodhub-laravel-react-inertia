import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import { AlertTriangle } from 'lucide-react';

export default function ConfirmationModal({
    show = false,
    onClose = () => { },
    onConfirm = () => { },
    title = 'Are you sure?',
    message = 'This action cannot be undone.',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    processing = false,
}) {
    return (
        <Modal show={show} onClose={onClose} maxWidth="md">
            <div className="p-6">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-warning-light flex items-center justify-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-warning" />
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                        {title}
                    </h2>

                    <p className="text-sm text-gray-500 mb-6">
                        {message}
                    </p>

                    <div className="flex gap-3 w-full">
                        <SecondaryButton className="flex-1 justify-center" onClick={onClose} disabled={processing}>
                            {cancelText}
                        </SecondaryButton>

                        <DangerButton className="flex-1 justify-center" onClick={onConfirm} disabled={processing}>
                            {confirmText}
                        </DangerButton>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
