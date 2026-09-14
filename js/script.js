/**
 * Hotel Booking Management System - Frontend JavaScript
 * College DBMS Project - Entity Data & UI Controller
 */

// Mock Database Store representing the 13 ER Diagram Entities
const mockData = {
  // 1. Hotel Entity & 3. Hotel Image Entity
  hotels: [
    {
      hotel_id: "HTL-101",
      name: "Grand Plaza Resort & Spa",
      location: "Marine Drive, Mumbai",
      star_rating: 5,
      contact_phone: "+91 98765 43210",
      contact_email: "info@grandplaza.com",
      total_rooms: 120,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=150&auto=format&fit=crop&q=60"
      ]
    },
    {
      hotel_id: "HTL-102",
      name: "Royal Palms Heritage",
      location: "Banjara Hills, Hyderabad",
      star_rating: 4,
      contact_phone: "+91 98765 12345",
      contact_email: "contact@royalpalms.com",
      total_rooms: 85,
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=150&auto=format&fit=crop&q=60"
      ]
    },
    {
      hotel_id: "HTL-103",
      name: "Ocean Breeze Resort",
      location: "Calangute, Goa",
      star_rating: 5,
      contact_phone: "+91 98123 45678",
      contact_email: "stay@oceanbreeze.com",
      total_rooms: 95,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=150&auto=format&fit=crop&q=60"
      ]
    }
  ],

  // 4. Room Type Entity & 5. Room Type Image Entity
  roomTypes: [
    {
      type_id: "RT-01",
      hotel_id: "HTL-101",
      type_name: "Deluxe King Suite",
      base_price: 6500,
      max_occupancy: 2,
      amenities: ["King Bed", "Sea View", "Free WiFi", "Jacuzzi"],
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=150&auto=format&fit=crop&q=60"
      ]
    },
    {
      type_id: "RT-02",
      hotel_id: "HTL-101",
      type_name: "Executive Twin Room",
      base_price: 4800,
      max_occupancy: 2,
      amenities: ["Twin Beds", "City View", "Work Desk"],
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=150&auto=format&fit=crop&q=60"
      ]
    },
    {
      type_id: "RT-03",
      hotel_id: "HTL-102",
      type_name: "Presidential Luxury Suite",
      base_price: 14500,
      max_occupancy: 4,
      amenities: ["Living Room", "Private Bar", "Balcony", "Butler Service"],
      images: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=150&auto=format&fit=crop&q=60"
      ]
    }
  ],

  // 6. Room Entity
  rooms: [
    { room_id: "R-101", hotel_id: "HTL-101", room_number: "101", type_id: "RT-01", floor: 1, status: "Occupied" },
    { room_id: "R-102", hotel_id: "HTL-101", room_number: "102", type_id: "RT-01", floor: 1, status: "Available" },
    { room_id: "R-103", hotel_id: "HTL-101", room_number: "103", type_id: "RT-02", floor: 1, status: "Maintenance" },
    { room_id: "R-201", hotel_id: "HTL-102", room_number: "201", type_id: "RT-03", floor: 2, status: "Occupied" },
    { room_id: "R-305", hotel_id: "HTL-103", room_number: "305", type_id: "RT-01", floor: 3, status: "Available" }
  ],

  // 1. Customer Entity
  customers: [
    { customer_id: "CUST-501", name: "Aarav Sharma", email: "aarav.sharma@example.com", phone: "+91 99887 76655", id_proof_type: "Aadhaar Card", id_proof_num: "XXXX-XXXX-1234", city: "Bengaluru" },
    { customer_id: "CUST-502", name: "Priya Patel", email: "priya.patel@example.com", phone: "+91 98765 43210", id_proof_type: "Passport", id_proof_num: "Z9876543", city: "Mumbai" },
    { customer_id: "CUST-503", name: "Rohan Verma", email: "rohan.v@example.com", phone: "+91 91234 56789", id_proof_type: "Driving License", id_proof_num: "KA-01-2022-0098", city: "Delhi" },
    { customer_id: "CUST-504", name: "Ananya Roy", email: "ananya.roy@example.com", phone: "+91 95554 44332", id_proof_type: "Aadhaar Card", id_proof_num: "XXXX-XXXX-9988", city: "Kolkata" }
  ],

  // 7. Booking Entity
  bookings: [
    { booking_id: "BK-8001", customer_id: "CUST-501", customer_name: "Aarav Sharma", room_id: "R-101", check_in: "2026-09-12", check_out: "2026-09-16", total_amount: 26000, status: "Confirmed" },
    { booking_id: "BK-8002", customer_id: "CUST-502", customer_name: "Priya Patel", room_id: "R-201", check_in: "2026-09-14", check_out: "2026-09-18", total_amount: 58000, status: "Checked-In" },
    { booking_id: "BK-8003", customer_id: "CUST-503", customer_name: "Rohan Verma", room_id: "R-102", check_in: "2026-09-01", check_out: "2026-09-04", total_amount: 19500, status: "Completed" },
    { booking_id: "BK-8004", customer_id: "CUST-504", customer_name: "Ananya Roy", room_id: "R-103", check_in: "2026-09-20", check_out: "2026-09-22", total_amount: 9600, status: "Cancelled" }
  ],

  // 8. Payment Entity
  payments: [
    { payment_id: "PAY-301", booking_id: "BK-8001", amount: 26000, payment_method: "UPI (Google Pay)", payment_status: "Completed", transaction_date: "2026-09-10 14:30" },
    { payment_id: "PAY-302", booking_id: "BK-8002", amount: 58000, payment_method: "Credit Card (HDFC)", payment_status: "Completed", transaction_date: "2026-09-14 09:15" },
    { payment_id: "PAY-303", booking_id: "BK-8003", amount: 19500, payment_method: "Net Banking", payment_status: "Completed", transaction_date: "2026-08-30 18:00" },
    { payment_id: "PAY-304", booking_id: "BK-8004", amount: 9600, payment_method: "UPI (PhonePe)", payment_status: "Refunded", transaction_date: "2026-09-15 11:20" }
  ],

  // 9. Cancellation Entity
  cancellations: [
    { cancellation_id: "CN-901", booking_id: "BK-8004", customer_name: "Ananya Roy", cancellation_date: "2026-09-15 11:00", reason: "Change of travel plans", refund_amount: 8640, cancellation_fee: 960 }
  ],

  // 10. Loyalty Entity & 11. Reward Transaction Entity
  loyalty: [
    { loyalty_id: "LY-701", customer_id: "CUST-501", customer_name: "Aarav Sharma", tier: "Gold", points_balance: 1450, total_earned: 2200 },
    { loyalty_id: "LY-702", customer_id: "CUST-502", customer_name: "Priya Patel", tier: "Platinum", points_balance: 4800, total_earned: 6100 },
    { loyalty_id: "LY-703", customer_id: "CUST-503", customer_name: "Rohan Verma", tier: "Silver", points_balance: 650, total_earned: 650 }
  ],
  rewardTransactions: [
    { txn_id: "RTX-110", loyalty_id: "LY-701", points: 260, txn_type: "Earned", description: "Stay reward for BK-8001", date: "2026-09-12" },
    { txn_id: "RTX-111", loyalty_id: "LY-702", points: 500, txn_type: "Redeemed", description: "Free Spa Voucher Discount", date: "2026-09-14" }
  ],

  // 12. Digital Check-in Entity
  digitalCheckins: [
    { checkin_id: "DC-401", booking_id: "BK-8002", customer_name: "Priya Patel", verification_status: "Verified (Facial ID)", digital_key_code: "KEY-PASS-9981", checkin_time: "2026-09-14 10:05", room_assigned: "R-201" },
    { checkin_id: "DC-402", booking_id: "BK-8001", customer_name: "Aarav Sharma", verification_status: "Pending OTP", digital_key_code: "KEY-PASS-1022", checkin_time: "2026-09-12 12:40", room_assigned: "R-101" }
  ],

  // 13. AI Recommendation / Decision Support Entity
  aiRecommendations: [
    { rec_id: "AI-101", customer_id: "CUST-502", customer_name: "Priya Patel", recommended_room_type: "Presidential Luxury Suite", reasoning: "High propensity for luxury upgrades based on 5 past stays.", confidence_score: "94%", action_suggested: "Offer complimentary airport transfer on upgrade." },
    { rec_id: "AI-102", customer_id: "CUST-501", customer_name: "Aarav Sharma", recommended_room_type: "Deluxe Sea View Suite", reasoning: "Prefers ocean view during weekend slots.", confidence_score: "88%", action_suggested: "Apply 10% Gold loyalty discount token." },
    { rec_id: "AI-103", customer_id: "CUST-503", customer_name: "Rohan Verma", recommended_room_type: "Executive Twin Room", reasoning: "Business traveller profile with frequent single-night stays.", confidence_score: "91%", action_suggested: "Suggest late check-out addon." }
  ],

  // Maintenance Entity Module
  maintenance: [
    {
      maintenance_id: "MNT-201",
      room_number: "103",
      issue_description: "AC cooling thermostat fault & fan noise",
      reported_date: "2026-09-14 10:30",
      status: "In Progress",
      priority: "High",
      assigned_staff: "Rajesh Kumar (HVAC Tech)"
    },
    {
      maintenance_id: "MNT-202",
      room_number: "201",
      issue_description: "Bathroom shower faucet leaking & low pressure",
      reported_date: "2026-09-13 14:15",
      status: "Open",
      priority: "Urgent",
      assigned_staff: "Suresh Verma (Plumber)"
    },
    {
      maintenance_id: "MNT-203",
      room_number: "101",
      issue_description: "Smart keycard door lock battery low warning",
      reported_date: "2026-09-12 09:00",
      status: "Resolved",
      priority: "Medium",
      assigned_staff: "Amit Patel (Electrician)"
    },
    {
      maintenance_id: "MNT-204",
      room_number: "305",
      issue_description: "Balcony door latch loose repair",
      reported_date: "2026-09-10 16:45",
      status: "Closed",
      priority: "Low",
      assigned_staff: "Vikram Singh (Carpentry)"
    }
  ],

  // Personalized Notifications Module
  notifications: [
    {
      id: "NOTIF-101",
      category: "Booking",
      title: "Booking Confirmed: BK-8001",
      short_message: "Your reservation for Deluxe King Suite at Grand Plaza Resort has been confirmed.",
      full_message: "Thank you for choosing Grand Plaza Resort! Your booking reference BK-8001 for Deluxe King Suite (Check-in: 2026-09-12) has been confirmed.",
      timestamp: "2026-09-14 11:30 AM",
      is_read: false,
      icon: "📅",
      color_class: "icon-bookings"
    },
    {
      id: "NOTIF-102",
      category: "Payment",
      title: "Payment Receipt: ₹26,000",
      short_message: "UPI transaction PAY-301 processed successfully for booking BK-8001.",
      full_message: "Payment of ₹26,000 via UPI (Google Pay) for transaction PAY-301 has been successfully received. Invoice sent to registered email.",
      timestamp: "2026-09-14 10:15 AM",
      is_read: false,
      icon: "💳",
      color_class: "icon-hotels"
    },
    {
      id: "NOTIF-103",
      category: "Upgrade",
      title: "Exclusive Suite Upgrade Offer",
      short_message: "Upgrade your stay to Presidential Luxury Suite for a special discounted rate.",
      full_message: "Exclusive offer for your upcoming stay: Upgrade from Executive Twin Room to Presidential Luxury Suite for just +₹1,700/night.",
      timestamp: "2026-09-14 09:00 AM",
      is_read: false,
      icon: "🛋️",
      color_class: "icon-rooms"
    },
    {
      id: "NOTIF-104",
      category: "Maintenance",
      title: "Maintenance Completed: Room #101",
      short_message: "Smart keycard door lock battery replacement resolved by technician Amit Patel.",
      full_message: "Maintenance request MNT-203 for Room #101 has been marked as Resolved. Technician Amit Patel completed smart keycard battery service.",
      timestamp: "2026-09-13 04:20 PM",
      is_read: true,
      icon: "🛠️",
      color_class: "icon-customers"
    },
    {
      id: "NOTIF-105",
      category: "Loyalty",
      title: "+260 Reward Points Credited",
      short_message: "Gold Loyalty membership tier points updated for your recent booking.",
      full_message: "Congratulations! You earned 260 loyalty points for stay BK-8001. Your total balance is now 1,450 points.",
      timestamp: "2026-09-12 02:00 PM",
      is_read: true,
      icon: "⭐",
      color_class: "icon-rooms"
    },
    {
      id: "NOTIF-106",
      category: "Offers",
      title: "Special Offer: Complimentary Spa Voucher",
      short_message: "Enjoy a free 45-minute wellness spa session at Ocean Breeze Resort.",
      full_message: "Special promotion for Gold tier members! Book any weekend suite at Ocean Breeze Resort and receive a complimentary 45-minute wellness spa session.",
      timestamp: "2026-09-10 11:00 AM",
      is_read: true,
      icon: "🎁",
      color_class: "icon-hotels"
    },
    {
      id: "NOTIF-107",
      category: "Booking",
      title: "Booking Cancellation Notice: BK-8004",
      short_message: "Refund of ₹8,640 initiated for cancelled booking BK-8004.",
      full_message: "Booking BK-8004 for Ananya Roy has been cancelled as requested. Refund of ₹8,640 (after ₹960 fee) processed to original payment method.",
      timestamp: "2026-09-09 03:45 PM",
      is_read: true,
      icon: "❌",
      color_class: "icon-bookings"
    }
  ]
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileSidebar();
  renderDashboard();
  renderAllViews();
});

// Navigation Handling (Sidebar switching)
function initNavigation() {
  const menuLinks = document.querySelectorAll('.menu-link');
  
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state in sidebar
      menuLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      
      // Show targeted view section
      const targetView = link.getAttribute('data-view');
      switchView(targetView);

      // Close mobile drawer if open
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.remove('show');
    });
  });
}

function switchView(viewId) {
  const views = document.querySelectorAll('.view-section');
  views.forEach(view => {
    view.classList.remove('active');
  });

  const activeView = document.getElementById(`view-${viewId}`);
  if (activeView) {
    activeView.classList.add('active');
  }

  // Synchronize active highlight in sidebar menu links
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update header subtitle if appropriate
  const headerSubtitle = document.getElementById('header-subtitle');
  if (headerSubtitle) {
    headerSubtitle.textContent = `DBMS Entity Module: ${viewId.replace('-', ' ').toUpperCase()}`;
  }
}

// Global backdrop click dismissal for modals
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Mobile Toggle Sidebar
function initMobileSidebar() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('show');
    });
  }
}

// Render Dashboard Data & Stat Cards
function renderDashboard() {
  document.getElementById('stat-hotels-count').textContent = mockData.hotels.length;
  document.getElementById('stat-rooms-count').textContent = mockData.rooms.length;
  document.getElementById('stat-customers-count').textContent = mockData.customers.length;
  document.getElementById('stat-bookings-count').textContent = mockData.bookings.length;

  // Render recent bookings on dashboard summary
  const recentTableBody = document.getElementById('recent-bookings-tbody');
  if (recentTableBody) {
    recentTableBody.innerHTML = mockData.bookings.slice(0, 4).map(b => `
      <tr>
        <td><strong>${b.booking_id}</strong></td>
        <td>${b.customer_name}</td>
        <td>${b.room_id}</td>
        <td>${b.check_in}</td>
        <td>₹${b.total_amount.toLocaleString()}</td>
        <td><span class="badge ${getStatusBadgeClass(b.status)}">${b.status}</span></td>
      </tr>
    `).join('');
  }
}

// Render Data Tables for all views
function renderAllViews() {
  renderHotels();
  renderRoomTypes();
  renderRooms();
  renderRoomUpgradeView();
  renderMaintenance();
  renderBookings();
  renderPayments();
  renderCancellations();
  renderLoyalty();
  renderDigitalCheckins();
  renderAiRecommendations();
  renderCustomers();
  renderNotificationsView();
}

function renderMaintenance() {
  const tbody = document.getElementById('maintenance-tbody');
  if (!tbody) return;

  if (mockData.maintenance.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted);">No maintenance records found.</td></tr>`;
    return;
  }

  tbody.innerHTML = mockData.maintenance.map(m => `
    <tr>
      <td><strong>${m.maintenance_id}</strong></td>
      <td><strong>Room #${m.room_number}</strong></td>
      <td>${m.issue_description}</td>
      <td>${m.reported_date}</td>
      <td><span class="badge ${getPriorityBadgeClass(m.priority)}">${m.priority}</span></td>
      <td><span class="badge ${getMaintenanceStatusBadgeClass(m.status)}">${m.status}</span></td>
      <td>${m.assigned_staff}</td>
      <td>
        <div class="action-btn-group">
          <button class="btn btn-secondary btn-xs" onclick="viewMaintenanceDetails('${m.maintenance_id}')" title="View Details">👁️ View</button>
          <button class="btn btn-primary btn-xs" onclick="openUpdateStatusModal('${m.maintenance_id}')" title="Update Status">🔄 Status</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Multi-filter maintenance records (Search + Status + Priority)
function filterMaintenanceTable() {
  const search = (document.getElementById('search-maintenance')?.value || '').toLowerCase();
  const statusFilter = document.getElementById('filter-mnt-status')?.value || '';
  const priorityFilter = document.getElementById('filter-mnt-priority')?.value || '';
  const tbody = document.getElementById('maintenance-tbody');

  if (!tbody) return;

  const filtered = mockData.maintenance.filter(m => {
    const matchesSearch = !search || 
      m.maintenance_id.toLowerCase().includes(search) ||
      m.room_number.toLowerCase().includes(search) ||
      m.issue_description.toLowerCase().includes(search) ||
      m.assigned_staff.toLowerCase().includes(search);

    const matchesStatus = !statusFilter || m.status === statusFilter;
    const matchesPriority = !priorityFilter || m.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding:20px;">No matching maintenance records found.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(m => `
    <tr>
      <td><strong>${m.maintenance_id}</strong></td>
      <td><strong>Room #${m.room_number}</strong></td>
      <td>${m.issue_description}</td>
      <td>${m.reported_date}</td>
      <td><span class="badge ${getPriorityBadgeClass(m.priority)}">${m.priority}</span></td>
      <td><span class="badge ${getMaintenanceStatusBadgeClass(m.status)}">${m.status}</span></td>
      <td>${m.assigned_staff}</td>
      <td>
        <div class="action-btn-group">
          <button class="btn btn-secondary btn-xs" onclick="viewMaintenanceDetails('${m.maintenance_id}')">👁️ View</button>
          <button class="btn btn-primary btn-xs" onclick="openUpdateStatusModal('${m.maintenance_id}')">🔄 Status</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Modal Handlers & Maintenance Interactions
function openReportMaintenanceModal() {
  document.getElementById('form-report-mnt').reset();
  const modal = document.getElementById('modal-report-mnt');
  if (modal) modal.classList.add('active');
}

function handleReportMaintenance(e) {
  e.preventDefault();
  const roomNum = document.getElementById('mnt-room-select').value;
  const priority = document.getElementById('mnt-priority-select').value;
  const staff = document.getElementById('mnt-staff-input').value;
  const issue = document.getElementById('mnt-issue-input').value;

  const newId = `MNT-${200 + mockData.maintenance.length + 1}`;
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);

  const newRecord = {
    maintenance_id: newId,
    room_number: roomNum,
    issue_description: issue,
    reported_date: dateStr,
    status: 'Open',
    priority: priority,
    assigned_staff: staff
  };

  mockData.maintenance.unshift(newRecord);
  filterMaintenanceTable();
  closeModal('modal-report-mnt');
  showToast(`Maintenance issue ${newId} logged successfully!`);
}

function viewMaintenanceDetails(mntId) {
  const record = mockData.maintenance.find(m => m.maintenance_id === mntId);
  if (!record) return;

  const detailsBody = document.getElementById('mnt-details-body');
  if (detailsBody) {
    detailsBody.innerHTML = `
      <div style="background:var(--bg-primary); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:16px;">
        <div style="display:flex; justify-between; align-items:center;">
          <strong style="color:var(--accent-cyan); font-size:1.1rem;">Record ID: ${record.maintenance_id}</strong>
          <span class="badge ${getPriorityBadgeClass(record.priority)}">${record.priority} Priority</span>
        </div>
      </div>
      <p><strong>Room Number:</strong> Room #${record.room_number}</p>
      <p><strong>Reported Date:</strong> ${record.reported_date}</p>
      <p><strong>Current Status:</strong> <span class="badge ${getMaintenanceStatusBadgeClass(record.status)}">${record.status}</span></p>
      <p><strong>Assigned Staff:</strong> ${record.assigned_staff}</p>
      <div style="margin-top:12px; padding:12px; background:var(--bg-primary); border-radius:var(--radius-sm); border:1px solid var(--border-color);">
        <strong style="color:var(--text-muted); font-size:0.8rem; text-transform:uppercase;">Issue Description:</strong>
        <p style="margin-top:4px; color:var(--text-main);">${record.issue_description}</p>
      </div>
    `;
  }

  const modal = document.getElementById('modal-view-mnt');
  if (modal) modal.classList.add('active');
}

function openUpdateStatusModal(mntId) {
  const record = mockData.maintenance.find(m => m.maintenance_id === mntId);
  if (!record) return;

  document.getElementById('update-mnt-id').value = record.maintenance_id;
  document.getElementById('update-mnt-id-display').value = `${record.maintenance_id} (Room #${record.room_number})`;
  document.getElementById('update-status-select').value = record.status;

  const modal = document.getElementById('modal-update-status');
  if (modal) modal.classList.add('active');
}

function handleUpdateStatus(e) {
  e.preventDefault();
  const mntId = document.getElementById('update-mnt-id').value;
  const newStatus = document.getElementById('update-status-select').value;

  const record = mockData.maintenance.find(m => m.maintenance_id === mntId);
  if (record) {
    record.status = newStatus;
    filterMaintenanceTable();
    closeModal('modal-update-status');
    showToast(`Status for ${mntId} updated to '${newStatus}'!`);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

function getPriorityBadgeClass(priority) {
  switch (priority) {
    case 'Urgent': return 'badge-urgent';
    case 'High': return 'badge-high';
    case 'Medium': return 'badge-medium';
    case 'Low': return 'badge-low';
    default: return 'badge-info';
  }
}

function getMaintenanceStatusBadgeClass(status) {
  switch (status) {
    case 'Open': return 'badge-danger';
    case 'In Progress': return 'badge-warning';
    case 'Resolved': return 'badge-success';
    case 'Closed': return 'badge-purple';
    default: return 'badge-info';
  }
}

function renderHotels() {
  const tbody = document.getElementById('hotels-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = mockData.hotels.map(h => `
    <tr>
      <td><strong>${h.hotel_id}</strong></td>
      <td>
        <div style="font-weight:600;">${h.name}</div>
        <div style="font-size:0.75rem; color:var(--text-muted);">${h.contact_email}</div>
      </td>
      <td>${h.location}</td>
      <td>⭐ ${h.star_rating} Stars</td>
      <td>${h.total_rooms} Rooms</td>
      <td>
        <div class="img-thumb-group">
          ${h.images.map(img => `<img src="${img}" alt="Hotel Image Entity" class="img-thumb" title="Entity: Hotel Image" />`).join('')}
        </div>
      </td>
      <td>${h.contact_phone}</td>
    </tr>
  `).join('');
}

function renderRoomTypes() {
  const tbody = document.getElementById('room-types-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.roomTypes.map(rt => `
    <tr>
      <td><strong>${rt.type_id}</strong></td>
      <td>${rt.hotel_id}</td>
      <td><strong>${rt.type_name}</strong></td>
      <td>₹${rt.base_price.toLocaleString()} / night</td>
      <td>${rt.max_occupancy} Guests</td>
      <td>
        <div style="display:flex; gap:4px; flex-wrap:wrap;">
          ${rt.amenities.map(a => `<span class="badge badge-info" style="font-size:0.7rem;">${a}</span>`).join('')}
        </div>
      </td>
      <td>
        <div class="img-thumb-group">
          ${rt.images.map(img => `<img src="${img}" alt="Room Type Image Entity" class="img-thumb" title="Entity: Room Type Image" />`).join('')}
        </div>
      </td>
    </tr>
  `).join('');
}

function renderRooms() {
  const tbody = document.getElementById('rooms-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.rooms.map(r => `
    <tr>
      <td><strong>${r.room_id}</strong></td>
      <td>${r.hotel_id}</td>
      <td>Room #${r.room_number}</td>
      <td>${r.type_id}</td>
      <td>Floor ${r.floor}</td>
      <td><span class="badge ${getRoomStatusBadge(r.status)}">${r.status}</span></td>
    </tr>
  `).join('');
}

function renderBookings() {
  const tbody = document.getElementById('bookings-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.bookings.map(b => `
    <tr>
      <td><strong>${b.booking_id}</strong></td>
      <td>${b.customer_name} <br/><small style="color:var(--text-muted);">${b.customer_id}</small></td>
      <td>${b.room_id}</td>
      <td>${b.check_in}</td>
      <td>${b.check_out}</td>
      <td>₹${b.total_amount.toLocaleString()}</td>
      <td><span class="badge ${getStatusBadgeClass(b.status)}">${b.status}</span></td>
    </tr>
  `).join('');
}

function renderPayments() {
  const tbody = document.getElementById('payments-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.payments.map(p => `
    <tr>
      <td><strong>${p.payment_id}</strong></td>
      <td>${p.booking_id}</td>
      <td>₹${p.amount.toLocaleString()}</td>
      <td>${p.payment_method}</td>
      <td><span class="badge ${p.payment_status === 'Completed' ? 'badge-success' : 'badge-danger'}">${p.payment_status}</span></td>
      <td>${p.transaction_date}</td>
    </tr>
  `).join('');
}

function renderCancellations() {
  const tbody = document.getElementById('cancellations-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.cancellations.map(c => `
    <tr>
      <td><strong>${c.cancellation_id}</strong></td>
      <td>${c.booking_id}</td>
      <td>${c.customer_name}</td>
      <td>${c.reason}</td>
      <td>₹${c.refund_amount.toLocaleString()}</td>
      <td>₹${c.cancellation_fee.toLocaleString()}</td>
      <td>${c.cancellation_date}</td>
    </tr>
  `).join('');
}

function renderLoyalty() {
  const tbody = document.getElementById('loyalty-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.loyalty.map(l => `
    <tr>
      <td><strong>${l.loyalty_id}</strong></td>
      <td>${l.customer_name} <br/><small style="color:var(--text-muted);">${l.customer_id}</small></td>
      <td><span class="badge badge-purple">${l.tier}</span></td>
      <td><strong>${l.points_balance} pts</strong></td>
      <td>${l.total_earned} pts</td>
    </tr>
  `).join('');

  // Also render reward transactions sub-table
  const rtxTbody = document.getElementById('reward-transactions-tbody');
  if (rtxTbody) {
    rtxTbody.innerHTML = mockData.rewardTransactions.map(rtx => `
      <tr>
        <td><strong>${rtx.txn_id}</strong></td>
        <td>${rtx.loyalty_id}</td>
        <td><span class="badge ${rtx.txn_type === 'Earned' ? 'badge-success' : 'badge-warning'}">${rtx.txn_type}</span></td>
        <td>${rtx.points} pts</td>
        <td>${rtx.description}</td>
        <td>${rtx.date}</td>
      </tr>
    `).join('');
  }
}

function renderDigitalCheckins() {
  const tbody = document.getElementById('digital-checkins-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.digitalCheckins.map(d => `
    <tr>
      <td><strong>${d.checkin_id}</strong></td>
      <td>${d.booking_id}</td>
      <td>${d.customer_name}</td>
      <td>${d.room_assigned}</td>
      <td><span class="badge badge-info">${d.verification_status}</span></td>
      <td><code style="background:#0f172a; padding:4px 8px; border-radius:4px; color:var(--accent-cyan); font-family:monospace;">${d.digital_key_code}</code></td>
      <td>${d.checkin_time}</td>
    </tr>
  `).join('');
}

function renderAiRecommendations() {
  const grid = document.getElementById('ai-recommendations-grid');
  if (grid) {
    grid.innerHTML = mockData.aiRecommendations.map(ai => `
      <div class="ai-card">
        <div class="ai-card-header">
          <div>
            <h4 style="font-weight:700; color:var(--text-main);">${ai.customer_name}</h4>
            <span style="font-size:0.75rem; color:var(--text-muted);">${ai.customer_id}</span>
          </div>
          <span class="ai-score">Confidence ${ai.confidence_score}</span>
        </div>
        <div style="margin:12px 0; font-size:0.88rem; color:var(--accent-cyan); font-weight:600;">
          💡 Recommended: ${ai.recommended_room_type}
        </div>
        <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:12px;">
          ${ai.reasoning}
        </p>
        <div style="background:var(--bg-primary); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.8rem;">
          <strong style="color:var(--accent-warning);">Action Suggested:</strong> ${ai.action_suggested}
        </div>
      </div>
    `).join('');
  }

  // Trigger dynamic recommendation generation
  generateAiRecommendations();
}

// Interactive AI Preference Matcher Engine
function generateAiRecommendations() {
  const resultsGrid = document.getElementById('ai-recommendations-results');
  if (!resultsGrid) return;

  const locVal = document.getElementById('ai-pref-location')?.value || '';
  const budgetVal = parseFloat(document.getElementById('ai-pref-budget')?.value || 999999);
  const typeVal = document.getElementById('ai-pref-roomtype')?.value || '';
  const starsVal = parseInt(document.getElementById('ai-pref-stars')?.value || 0);

  const selectedAmenities = Array.from(document.querySelectorAll('.ai-amenity-checkbox:checked')).map(cb => cb.value);

  // Evaluate candidate combinations of Room Types + Hotels
  const candidates = mockData.roomTypes.map(rt => {
    const hotel = mockData.hotels.find(h => h.hotel_id === rt.hotel_id) || {
      name: "GrandStay Hotel",
      location: "Prime Location",
      star_rating: 5
    };

    let score = 75;
    let reasons = [];

    // Location scoring
    if (locVal) {
      if (hotel.location === locVal) {
        score += 12;
        reasons.push(`Matches location (${locVal})`);
      } else {
        score -= 25;
      }
    }

    // Budget scoring
    if (budgetVal < 999999) {
      if (rt.base_price <= budgetVal) {
        score += 10;
        reasons.push(`Under budget limit (₹${rt.base_price.toLocaleString()})`);
      } else {
        score -= 30;
      }
    }

    // Room type scoring
    if (typeVal) {
      if (rt.type_name === typeVal) {
        score += 10;
        reasons.push(`Requested room category`);
      } else {
        score -= 15;
      }
    }

    // Star rating scoring
    if (starsVal > 0) {
      if (hotel.star_rating >= starsVal) {
        score += 5;
        reasons.push(`${hotel.star_rating}⭐ rating standard`);
      } else {
        score -= 20;
      }
    }

    // Amenities scoring
    const matchedAmenities = selectedAmenities.filter(a => rt.amenities.includes(a));
    if (matchedAmenities.length > 0) {
      score += (matchedAmenities.length * 5);
      reasons.push(`Includes ${matchedAmenities.join(', ')}`);
    }

    // Clamp score
    score = Math.min(99, Math.max(62, score));

    if (reasons.length === 0) {
      reasons.push("Recommended based on overall guest satisfaction & availability");
    }

    return {
      roomType: rt,
      hotel: hotel,
      score: score,
      matchedAmenities: matchedAmenities,
      reasoning: reasons.join(' • ')
    };
  });

  // Sort descending by AI match score
  candidates.sort((a, b) => b.score - a.score);

  const countText = document.getElementById('ai-results-count-text');
  if (countText) {
    countText.textContent = `Showing ${candidates.length} AI matched properties sorted by match score`;
  }

  // Render cards
  resultsGrid.innerHTML = candidates.map(item => `
    <div class="ai-card-v2">
      <div class="ai-card-img-wrapper">
        <img src="${item.roomType.images[0]}" alt="${item.roomType.type_name}" class="ai-card-img" />
        <span class="ai-match-badge">✨ ${item.score}% Match</span>
      </div>
      <div class="ai-card-body">
        <h4 class="ai-card-title">${item.roomType.type_name}</h4>
        <div class="ai-card-location">
          <span>📍 ${item.hotel.name} • ${item.hotel.location}</span>
          <span style="color:var(--accent-warning); margin-left: auto;">⭐ ${item.hotel.star_rating}</span>
        </div>
        <div class="ai-reasoning-box">
          💡 <strong>AI Insight:</strong> ${item.reasoning}
        </div>
        <div class="ai-card-amenities">
          ${item.roomType.amenities.map(a => `<span class="badge ${item.matchedAmenities.includes(a) ? 'badge-success' : 'badge-info'}" style="font-size:0.7rem;">${a}</span>`).join('')}
        </div>
        <div class="ai-card-footer">
          <div class="ai-price-tag">₹${item.roomType.base_price.toLocaleString()} <span>/ night</span></div>
          <button class="btn btn-primary btn-xs" onclick="simulateBooking('${item.roomType.type_name}', '${item.hotel.name}')">Book Recommendation</button>
        </div>
      </div>
    </div>
  `).join('');
}

function simulateBooking(roomTypeName, hotelName) {
  showToast(`Simulated booking request initiated for ${roomTypeName} at ${hotelName}!`);
}

function renderCustomers() {
  const tbody = document.getElementById('customers-tbody');
  if (!tbody) return;

  tbody.innerHTML = mockData.customers.map(c => `
    <tr>
      <td><strong>${c.customer_id}</strong></td>
      <td><strong>${c.name}</strong></td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
      <td>${c.city}</td>
      <td>${c.id_proof_type}: <span style="font-family:monospace; color:var(--text-muted);">${c.id_proof_num}</span></td>
    </tr>
  `).join('');
}

// Helpers
function getStatusBadgeClass(status) {
  switch (status) {
    case 'Confirmed': return 'badge-success';
    case 'Checked-In': return 'badge-info';
    case 'Completed': return 'badge-purple';
    case 'Cancelled': return 'badge-danger';
    default: return 'badge-warning';
  }
}

function getRoomStatusBadge(status) {
  switch (status) {
    case 'Available': return 'badge-success';
    case 'Occupied': return 'badge-danger';
    case 'Maintenance': return 'badge-warning';
    default: return 'badge-info';
  }
}

// Search Filter helper
function filterTable(inputId, tableId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const filter = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  if (!table) return;
  const tr = table.getElementsByTagName('tr');

  for (let i = 1; i < tr.length; i++) {
    let visible = false;
    const tds = tr[i].getElementsByTagName('td');
    for (let j = 0; j < tds.length; j++) {
      if (tds[j] && tds[j].textContent.toLowerCase().indexOf(filter) > -1) {
        visible = true;
        break;
      }
    }
    tr[i].style.display = visible ? '' : 'none';
  }
}

// Room Upgrade Module Controller
function populateUpgradeBookingSelector() {
  const select = document.getElementById('upgrade-booking-select');
  if (!select) return;

  const activeBookings = mockData.bookings.filter(b => b.status !== 'Cancelled');
  if (activeBookings.length === 0) {
    select.innerHTML = `<option value="">No Active Bookings</option>`;
    return;
  }

  const currentVal = select.value;
  select.innerHTML = activeBookings.map(b => `
    <option value="${b.booking_id}" ${currentVal === b.booking_id ? 'selected' : ''}>
      ${b.booking_id}: ${b.customer_name} (${b.room_id})
    </option>
  `).join('');
}

function renderRoomUpgradeView() {
  populateUpgradeBookingSelector();

  const select = document.getElementById('upgrade-booking-select');
  const panel = document.getElementById('current-room-panel');
  if (!select || !panel) return;

  const bookingId = select.value;
  const booking = mockData.bookings.find(b => b.booking_id === bookingId);

  if (!booking) {
    panel.innerHTML = `<p style="color:var(--text-muted);">Please select a valid booking to view current room details.</p>`;
    renderUpgradeOptions();
    return;
  }

  const room = mockData.rooms.find(r => r.room_id === booking.room_id) || { room_number: booking.room_id, type_id: 'RT-02', hotel_id: 'HTL-101' };
  const currentType = mockData.roomTypes.find(rt => rt.type_id === room.type_id) || mockData.roomTypes[1];
  const hotel = mockData.hotels.find(h => h.hotel_id === currentType.hotel_id) || mockData.hotels[0];

  panel.innerHTML = `
    <div class="current-room-header">
      <div>
        <span class="badge badge-info" style="margin-bottom:6px;">Active Guest Stay</span>
        <h3 style="font-size:1.2rem; font-weight:800; color:var(--text-main);">${booking.customer_name}</h3>
        <p style="font-size:0.82rem; color:var(--text-muted);">Booking Reference: <strong>${booking.booking_id}</strong> • Hotel: <strong>${hotel.name}</strong></p>
      </div>
      <span class="badge ${getStatusBadgeClass(booking.status)}">${booking.status}</span>
    </div>

    <div class="current-room-grid">
      <div class="current-room-item">
        <label>Current Room Category</label>
        <span>${currentType.type_name}</span>
      </div>
      <div class="current-room-item">
        <label>Assigned Room Number</label>
        <span>Room #${room.room_number}</span>
      </div>
      <div class="current-room-item">
        <label>Current Nightly Rate</label>
        <span>₹${currentType.base_price.toLocaleString()} / night</span>
      </div>
      <div class="current-room-item">
        <label>Stay Dates</label>
        <span>${booking.check_in} to ${booking.check_out}</span>
      </div>
    </div>

    <div style="margin-top:16px; padding-top:14px; border-top:1px solid var(--border-color); display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <strong style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase;">Included Amenities:</strong>
      ${currentType.amenities.map(a => `<span class="badge badge-info" style="font-size:0.7rem;">${a}</span>`).join('')}
    </div>
  `;

  renderUpgradeOptions();
}

function renderUpgradeOptions() {
  const optionsGrid = document.getElementById('upgrade-options-grid');
  const select = document.getElementById('upgrade-booking-select');
  if (!optionsGrid || !select) return;

  const bookingId = select.value;
  const booking = mockData.bookings.find(b => b.booking_id === bookingId);

  if (!booking) {
    optionsGrid.innerHTML = `<p style="color:var(--text-muted); padding:20px;">Select an active booking to view upgrade options.</p>`;
    return;
  }

  const currentRoom = mockData.rooms.find(r => r.room_id === booking.room_id) || { type_id: 'RT-02' };
  const currentType = mockData.roomTypes.find(rt => rt.type_id === currentRoom.type_id) || mockData.roomTypes[1];

  let upgradeTypes = mockData.roomTypes.filter(rt => rt.base_price > currentType.base_price);

  const priceFilter = parseFloat(document.getElementById('filter-upgrade-price')?.value || 999999);
  const sortVal = document.getElementById('sort-upgrade-options')?.value || 'price-asc';

  upgradeTypes = upgradeTypes.filter(rt => (rt.base_price - currentType.base_price) <= priceFilter);

  if (sortVal === 'price-asc') {
    upgradeTypes.sort((a, b) => a.base_price - b.base_price);
  } else if (sortVal === 'price-desc') {
    upgradeTypes.sort((a, b) => b.base_price - a.base_price);
  } else if (sortVal === 'occupancy') {
    upgradeTypes.sort((a, b) => b.max_occupancy - a.max_occupancy);
  }

  if (upgradeTypes.length === 0) {
    optionsGrid.innerHTML = `
      <div class="card-panel" style="grid-column: 1 / -1; text-align:center; padding:32px;">
        <span style="font-size:2rem;">👑</span>
        <h4 style="margin-top:8px; font-weight:700;">Top Suite Category Assigned!</h4>
        <p style="font-size:0.83rem; color:var(--text-muted);">This booking is currently allocated in our premier luxury suite tier.</p>
      </div>
    `;
    return;
  }

  optionsGrid.innerHTML = upgradeTypes.map(targetType => {
    const priceDelta = targetType.base_price - currentType.base_price;
    const hotel = mockData.hotels.find(h => h.hotel_id === targetType.hotel_id) || mockData.hotels[0];
    const newAmenities = targetType.amenities.filter(a => !currentType.amenities.includes(a));

    return `
      <div class="upgrade-card">
        <div class="upgrade-img-wrapper">
          <img src="${targetType.images[0]}" alt="${targetType.type_name}" class="upgrade-img" />
          <span class="price-delta-badge">+ ₹${priceDelta.toLocaleString()} / night</span>
        </div>
        <div class="upgrade-card-body">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px;">
            <h4 class="ai-card-title">${targetType.type_name}</h4>
            <span class="badge badge-success" style="font-size:0.7rem;">Available Now</span>
          </div>
          <div class="ai-card-location">📍 ${hotel.name} • Max ${targetType.max_occupancy} Guests</div>
          
          <div style="background:var(--bg-primary); padding:10px; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:12px; font-size:0.8rem;">
            <strong style="color:var(--accent-cyan);">Upgraded Perks:</strong>
            <p style="color:var(--text-muted); margin-top:2px;">Adds ${newAmenities.length > 0 ? newAmenities.join(', ') : 'all VIP suite privileges'}</p>
          </div>

          <div class="ai-card-amenities">
            ${targetType.amenities.map(a => `<span class="badge ${newAmenities.includes(a) ? 'badge-purple' : 'badge-info'}" style="font-size:0.7rem;">${a}</span>`).join('')}
          </div>

          <div class="upgrade-card-footer">
            <div>
              <div class="ai-price-tag">₹${targetType.base_price.toLocaleString()} <span>/ night</span></div>
              <small style="color:var(--text-muted); font-size:0.72rem;">Current: ₹${currentType.base_price.toLocaleString()}</small>
            </div>
            <button class="btn btn-primary" onclick="openConfirmUpgradeModal('${booking.booking_id}', '${targetType.type_id}')" style="background:linear-gradient(135deg, var(--accent-purple), var(--accent-primary)); border:none;">
              <span>⬆️ Upgrade Room</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openConfirmUpgradeModal(bookingId, targetTypeId) {
  const booking = mockData.bookings.find(b => b.booking_id === bookingId);
  const targetType = mockData.roomTypes.find(rt => rt.type_id === targetTypeId);
  if (!booking || !targetType) return;

  const currentRoom = mockData.rooms.find(r => r.room_id === booking.room_id) || { type_id: 'RT-02' };
  const currentType = mockData.roomTypes.find(rt => rt.type_id === currentRoom.type_id) || mockData.roomTypes[1];

  const priceDeltaPerNight = targetType.base_price - currentType.base_price;
  
  const checkIn = new Date(booking.check_in);
  const checkOut = new Date(booking.check_out);
  const diffTime = Math.abs(checkOut - checkIn);
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const totalUpgradeCost = priceDeltaPerNight * nights;
  const newTotalBookingAmount = booking.total_amount + totalUpgradeCost;

  document.getElementById('upgrade-target-booking-id').value = bookingId;
  document.getElementById('upgrade-target-type-id').value = targetTypeId;

  const detailsBody = document.getElementById('upgrade-modal-details-body');
  if (detailsBody) {
    detailsBody.innerHTML = `
      <div style="background:var(--bg-primary); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:16px;">
        <div style="font-size:0.85rem; color:var(--text-muted);">Guest Name: <strong style="color:var(--text-main);">${booking.customer_name}</strong></div>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">Booking Ref: <strong style="color:var(--accent-cyan);">${booking.booking_id}</strong> (${nights} Nights stay)</div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
        <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); padding:10px; border-radius:var(--radius-sm);">
          <div style="font-size:0.75rem; color:var(--accent-danger); font-weight:700; text-transform:uppercase;">Current Room</div>
          <div style="font-weight:700; margin-top:2px;">${currentType.type_name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">₹${currentType.base_price.toLocaleString()} / night</div>
        </div>

        <div style="background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.3); padding:10px; border-radius:var(--radius-sm);">
          <div style="font-size:0.75rem; color:var(--accent-success); font-weight:700; text-transform:uppercase;">Upgraded Room</div>
          <div style="font-weight:700; margin-top:2px;">${targetType.type_name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">₹${targetType.base_price.toLocaleString()} / night</div>
        </div>
      </div>

      <div style="background:var(--bg-primary); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-color); font-size:0.88rem; line-height:1.6;">
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Nightly Rate Difference:</span>
          <strong>+ ₹${priceDeltaPerNight.toLocaleString()} / night</strong>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:var(--text-muted);">Duration:</span>
          <span>${nights} Nights</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:8px; padding-top:8px; border-top:1px solid var(--border-color);">
          <span style="font-weight:600;">Total Additional Fee:</span>
          <strong style="color:var(--accent-warning); font-size:1.05rem;">+ ₹${totalUpgradeCost.toLocaleString()}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:4px;">
          <span style="font-weight:600;">New Total Booking Price:</span>
          <strong style="color:var(--accent-success); font-size:1.05rem;">₹${newTotalBookingAmount.toLocaleString()}</strong>
        </div>
      </div>
    `;
  }

  const modal = document.getElementById('modal-confirm-upgrade');
  if (modal) modal.classList.add('active');
}

function handleConfirmUpgrade(e) {
  e.preventDefault();
  const bookingId = document.getElementById('upgrade-target-booking-id').value;
  const targetTypeId = document.getElementById('upgrade-target-type-id').value;

  const booking = mockData.bookings.find(b => b.booking_id === bookingId);
  const targetType = mockData.roomTypes.find(rt => rt.type_id === targetTypeId);

  if (booking && targetType) {
    const availableRoom = mockData.rooms.find(r => r.type_id === targetTypeId && r.status === 'Available') || { room_id: `R-${targetTypeId.slice(-2)}99`, room_number: "Suite 99" };
    
    const currentRoom = mockData.rooms.find(r => r.room_id === booking.room_id) || { type_id: 'RT-02' };
    const currentType = mockData.roomTypes.find(rt => rt.type_id === currentRoom.type_id) || mockData.roomTypes[1];
    
    const priceDelta = targetType.base_price - currentType.base_price;
    const checkIn = new Date(booking.check_in);
    const checkOut = new Date(booking.check_out);
    const nights = Math.max(1, Math.ceil(Math.abs(checkOut - checkIn) / (1000 * 60 * 60 * 24)));

    booking.room_id = availableRoom.room_id;
    booking.total_amount += (priceDelta * nights);

    closeModal('modal-confirm-upgrade');
    renderAllViews();
    showToast(`🎉 Room upgrade confirmed! ${booking.booking_id} upgraded to ${targetType.type_name}!`);
  }
}

// Personalized Notifications Controller
let currentNotifFilter = 'All';

function renderNotificationsView() {
  updateNotificationBadges();
  renderNotificationCards(currentNotifFilter);
}

function updateNotificationBadges() {
  const unreadCount = mockData.notifications.filter(n => !n.is_read).length;
  
  const sidebarBadge = document.getElementById('unread-notifications-badge');
  if (sidebarBadge) {
    sidebarBadge.textContent = unreadCount;
    sidebarBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
  }

  const headerBadge = document.getElementById('header-notif-count');
  if (headerBadge) {
    headerBadge.textContent = unreadCount;
    headerBadge.style.display = unreadCount > 0 ? 'inline-block' : 'none';
  }
}

function filterNotifications(category, elementBtn) {
  currentNotifFilter = category;

  if (elementBtn) {
    const pills = document.querySelectorAll('.notif-filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    elementBtn.classList.add('active');
  }

  renderNotificationCards(category);
}

function renderNotificationCards(category = 'All') {
  const container = document.getElementById('notifications-list-container');
  if (!container) return;

  let filtered = mockData.notifications;
  if (category === 'Unread') {
    filtered = filtered.filter(n => !n.is_read);
  } else if (category !== 'All') {
    filtered = filtered.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card-panel" style="text-align:center; padding:36px; color:var(--text-muted);">
        <span style="font-size:2.2rem; display:block; margin-bottom:8px;">🔔</span>
        <h4 style="font-weight:700; color:var(--text-main);">No Notifications Found</h4>
        <p style="font-size:0.83rem;">No notification alerts matching category '${category}'.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(n => `
    <div class="notif-card ${!n.is_read ? 'unread' : ''}" onclick="viewNotificationDetail('${n.id}')">
      <div class="notif-icon-box ${n.color_class || 'icon-bookings'}">
        ${n.icon}
      </div>
      <div class="notif-content">
        <div class="notif-header-line">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span class="badge badge-info" style="font-size:0.68rem; padding:2px 8px;">${n.category}</span>
            <span class="notif-title">${n.title}</span>
            ${!n.is_read ? '<span class="unread-dot" title="Unread"></span>' : ''}
          </div>
          <span class="notif-time">${n.timestamp}</span>
        </div>
        <p class="notif-msg">${n.short_message}</p>
      </div>
      <div style="margin-left:auto; display:flex; align-items:center; gap:6px; flex-shrink:0;">
        ${!n.is_read ? `
          <button class="btn btn-secondary btn-xs" onclick="markNotificationAsRead('${n.id}', event)" title="Mark as Read">
            ✔ Mark Read
          </button>
        ` : `
          <span style="color:var(--accent-success); font-size:0.75rem; font-weight:600;">Read</span>
        `}
      </div>
    </div>
  `).join('');
}

function viewNotificationDetail(notifId) {
  const notif = mockData.notifications.find(n => n.id === notifId);
  if (!notif) return;

  // Automatically mark as read on view
  notif.is_read = true;
  updateNotificationBadges();
  renderNotificationCards(currentNotifFilter);

  const titleElem = document.getElementById('notif-modal-title');
  const bodyElem = document.getElementById('notif-modal-body');

  if (titleElem) {
    titleElem.innerHTML = `${notif.icon} ${notif.title}`;
  }

  if (bodyElem) {
    bodyElem.innerHTML = `
      <div style="background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:16px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span class="badge badge-info">${notif.category}</span>
          <span style="font-size:0.78rem; color:var(--text-muted); margin-left:8px;">Ref: ${notif.id}</span>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted);">${notif.timestamp}</span>
      </div>

      <div style="padding:14px; background:var(--bg-primary); border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:16px;">
        <strong style="color:var(--text-muted); font-size:0.78rem; text-transform:uppercase;">Notification Body:</strong>
        <p style="margin-top:6px; color:var(--text-main); font-size:0.92rem; line-height:1.5;">${notif.full_message}</p>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:var(--accent-cyan);">
        <span>Status: Marked as Read</span>
        <span>DBMS Notification Event</span>
      </div>
    `;
  }

  const modal = document.getElementById('modal-view-notif');
  if (modal) modal.classList.add('active');
}

function markNotificationAsRead(notifId, event) {
  if (event) event.stopPropagation();
  const notif = mockData.notifications.find(n => n.id === notifId);
  if (notif) {
    notif.is_read = true;
    updateNotificationBadges();
    renderNotificationCards(currentNotifFilter);
    showToast(`Notification marked as read!`);
  }
}

function markAllNotificationsAsRead() {
  mockData.notifications.forEach(n => n.is_read = true);
  updateNotificationBadges();
  renderNotificationCards(currentNotifFilter);
  showToast(`All notifications marked as read!`);
}
