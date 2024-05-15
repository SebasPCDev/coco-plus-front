import Form from '@/app/ui/invoices/create-form';
import EditInvoiceForm from '@/app/ui/invoices/edit-form';

export default function Page() {
  return (
    <div>
      <p>Pagina de Request Companies</p>
      <Form customers={[{ id: '1', name: 'sebastian' }]} />
      <EditInvoiceForm
        invoice={{ id: '2', customer_id: '3', amount: 10, status: 'paid' }}
        customers={[{ id: '1', name: 'sebastian' }]}
      />
    </div>
  );
}
