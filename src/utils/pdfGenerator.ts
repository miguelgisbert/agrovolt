import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateProspectusPDF = async () => {
  // Create a temporary container for the PDF content
  const tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  tempContainer.style.width = '210mm'; // A4 width
  tempContainer.style.backgroundColor = 'white';
  
  tempContainer.innerHTML = `
    <div style="padding: 20px; font-family: system-ui, -apple-system, sans-serif; color: #1f2937;">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #059669, #2563eb); color: white; padding: 30px; margin: -20px -20px 30px -20px; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px;">
          <div style="width: 40px; height: 40px; background: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center;">🌱</div>
          <div style="width: 40px; height: 40px; background: #f59e0b; border-radius: 50%; display: flex; align-items: center; justify-content: center;">☀️</div>
        </div>
        <h1 style="font-size: 36px; font-weight: bold; margin: 0;">
          <span style="color: #10b981;">Agro</span><span style="color: #f59e0b;">Volt</span>
        </h1>
        <p style="font-size: 18px; margin: 10px 0 0 0; opacity: 0.9;">Prospecto de Inversión 2024</p>
      </div>

      <!-- Executive Summary -->
      <div style="background: linear-gradient(135deg, #f0fdf4, #eff6ff); padding: 25px; border-radius: 15px; margin-bottom: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          🎯 Resumen Ejecutivo
        </h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
          <div>
            <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 15px;">Oportunidad de Mercado</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px; display: flex; align-items: start; gap: 8px;">
                <span style="color: #059669; font-weight: bold;">✓</span>
                <span>Mercado agrovoltaico global: <strong>€4.2B en 2024</strong></span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: start; gap: 8px;">
                <span style="color: #059669; font-weight: bold;">✓</span>
                <span>Crecimiento proyectado: <strong>27% CAGR hasta 2030</strong></span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: start; gap: 8px;">
                <span style="color: #059669; font-weight: bold;">✓</span>
                <span>España: <strong>25M hectáreas</strong> de superficie agrícola</span>
              </li>
              <li style="margin-bottom: 10px; display: flex; align-items: start; gap: 8px;">
                <span style="color: #059669; font-weight: bold;">✓</span>
                <span>Potencial de penetración: <strong>&lt;1% actual</strong></span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 15px;">Propuesta de Valor</h3>
            <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="font-size: 32px; font-weight: bold; color: #059669; margin-bottom: 5px;">ROI 12-18%</div>
              <div style="color: #6b7280; margin-bottom: 20px;">Retorno anual proyectado</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <div style="font-size: 20px; font-weight: bold; color: #2563eb;">7-9 años</div>
                  <div style="font-size: 12px; color: #6b7280;">Payback period</div>
                </div>
                <div>
                  <div style="font-size: 20px; font-weight: bold; color: #7c3aed;">25 años</div>
                  <div style="font-size: 12px; color: #6b7280;">Vida útil garantizada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Overview -->
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          ⚡ Tecnología y Modelo de Negocio
        </h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
          <div style="background: white; border: 2px solid #f3f4f6; padding: 20px; border-radius: 10px;">
            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 15px;">Sistema Agrovoltaico</h3>
            <div style="space-y: 12px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #10b981; border-radius: 50%;"></div>
                <span>Paneles solares elevados (4-6m altura)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #3b82f6; border-radius: 50%;"></div>
                <span>Estructura de poste central</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #f59e0b; border-radius: 50%;"></div>
                <span>Sistema de seguimiento solar</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="width: 12px; height: 12px; background: #8b5cf6; border-radius: 50%;"></div>
                <span>Monitoreo IoT integrado</span>
              </div>
            </div>
          </div>
          
          <div style="background: white; border: 2px solid #f3f4f6; padding: 20px; border-radius: 10px;">
            <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 15px;">Flujos de Ingresos</h3>
            <div style="space-y: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span>Venta de energía</span>
                <span style="font-weight: 600; color: #059669;">60-70%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span>Mejora productividad agrícola</span>
                <span style="font-weight: 600; color: #2563eb;">15-20%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span>Ahorro en riego</span>
                <span style="font-weight: 600; color: #0891b2;">10-15%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span>Servicios de mantenimiento</span>
                <span style="font-weight: 600; color: #7c3aed;">5-10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Financial Projections -->
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
          📊 Proyecciones Financieras
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
          <div style="background: white; border: 2px solid #dcfce7; padding: 20px; border-radius: 10px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 5px;">€2.5M - €5M</div>
            <div style="color: #6b7280; margin-bottom: 5px;">Inversión por proyecto</div>
            <div style="font-size: 12px; color: #059669;">10-20 hectáreas</div>
          </div>
          
          <div style="background: white; border: 2px solid #dbeafe; padding: 20px; border-radius: 10px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 5px;">€400K - €900K</div>
            <div style="color: #6b7280; margin-bottom: 5px;">Ingresos anuales</div>
            <div style="font-size: 12px; color: #2563eb;">Por proyecto</div>
          </div>
          
          <div style="background: white; border: 2px solid #e9d5ff; padding: 20px; border-radius: 10px; text-align: center;">
            <div style="font-size: 24px; font-weight: bold; color: #1f2937; margin-bottom: 5px;">15.2%</div>
            <div style="color: #6b7280; margin-bottom: 5px;">IRR promedio</div>
            <div style="font-size: 12px; color: #7c3aed;">Casos de estudio</div>
          </div>
        </div>
      </div>

      <!-- Investment Opportunity -->
      <div style="background: linear-gradient(135deg, #059669, #2563eb); color: white; padding: 25px; border-radius: 15px; margin-bottom: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; margin-bottom: 20px; text-align: center;">
          💼 Oportunidad de Inversión
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; text-align: center;">
          <div>
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 8px;">€50M</div>
            <div style="opacity: 0.9; margin-bottom: 5px;">Ronda de financiación</div>
            <div style="font-size: 12px; opacity: 0.8;">Serie A</div>
          </div>
          <div>
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 8px;">20-25</div>
            <div style="opacity: 0.9; margin-bottom: 5px;">Proyectos objetivo</div>
            <div style="font-size: 12px; opacity: 0.8;">Próximos 3 años</div>
          </div>
          <div>
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 8px;">500MW</div>
            <div style="opacity: 0.9; margin-bottom: 5px;">Capacidad instalada</div>
            <div style="font-size: 12px; opacity: 0.8;">Meta 2027</div>
          </div>
        </div>
      </div>

      <!-- Benefits Summary -->
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 20px;">
          🌟 Beneficios Clave del Sistema AgroVolt
        </h2>
        
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px;">
          <div style="text-align: center; padding: 15px;">
            <div style="width: 50px; height: 50px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto; font-size: 24px;">⚡</div>
            <h4 style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Energía Limpia</h4>
            <p style="font-size: 12px; color: #6b7280;">Genera electricidad mientras cultivas</p>
          </div>
          
          <div style="text-align: center; padding: 15px;">
            <div style="width: 50px; height: 50px; background: rgba(59, 130, 246, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto; font-size: 24px;">🛡️</div>
            <h4 style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Protección</h4>
            <p style="font-size: 12px; color: #6b7280;">Escudo contra granizo y clima extremo</p>
          </div>
          
          <div style="text-align: center; padding: 15px;">
            <div style="width: 50px; height: 50px; background: rgba(6, 182, 212, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto; font-size: 24px;">💧</div>
            <h4 style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Ahorro de Agua</h4>
            <p style="font-size: 12px; color: #6b7280;">Hasta 40% menos consumo de riego</p>
          </div>
          
          <div style="text-align: center; padding: 15px;">
            <div style="width: 50px; height: 50px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto; font-size: 24px;">🚜</div>
            <h4 style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Acceso Total</h4>
            <p style="font-size: 12px; color: #6b7280;">Maquinaria trabaja sin restricciones</p>
          </div>
          
          <div style="text-align: center; padding: 15px;">
            <div style="width: 50px; height: 50px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px auto; font-size: 24px;">🌱</div>
            <h4 style="font-weight: 600; margin-bottom: 8px; font-size: 14px;">Mejor Cultivo</h4>
            <p style="font-size: 12px; color: #6b7280;">Condiciones optimizadas de crecimiento</p>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div style="background: linear-gradient(135deg, #059669, #2563eb); color: white; padding: 25px; border-radius: 15px; text-align: center;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 15px;">Contacto para Inversores</h2>
        <p style="font-size: 16px; opacity: 0.9; margin-bottom: 10px;">inversores@agrovolt.com</p>
        <p style="font-size: 16px; opacity: 0.9;">+34 900 123 456</p>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
        © 2024 AgroVolt. Documento confidencial para uso exclusivo de inversores cualificados.
      </div>
    </div>
  `;
  
  document.body.appendChild(tempContainer);
  
  try {
    const canvas = await html2canvas(tempContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Download the PDF
    pdf.save('AgroVolt-Prospecto-Inversion-2024.pdf');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error al generar el PDF. Por favor, inténtelo de nuevo.');
  } finally {
    document.body.removeChild(tempContainer);
  }
};