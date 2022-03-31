<script> 

    import { inertia } from '@inertiajs/inertia-svelte' 
    import Layout from "../Layout/homelayout.svelte"
    import {
      Inertia
    } from '@inertiajs/inertia'
    import { Datatable } from '../Components/data-table/index' 
    const settings = { columnFilter: true }
    let rows
    export let form = {} 
    export let data = [] 
    export let viewer = {}
  
  </script>
  <Layout>
    <div slot="subheader">
  
  
    </div>
    <div slot="content">
      <div class="">
        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
            <section aria-labelledby="applicant-information-title">
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">Event Detail</h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Information about Event.</p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Title</dt>
                        <dd class="mt-1 text-sm text-gray-900">{form.title}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Link  Optin Form</dt>
                        <dd class="mt-1 text-sm text-gray-900"><a href="{location.origin}/{form.slug}">{location.origin}/{form.slug}</a></dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Auto Submit Link</dt>
                        <dd class="mt-1 text-sm text-gray-900">{location.origin}/api/register/{form.id}?phone=[phone]&name=[name]&email=[email]</dd>
                      </div> 
                      <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">About</dt>
                        <dd class="mt-1 text-sm text-gray-900">{form.description}</dd>
                      </div>
                       
                    </dl>
                  </div> 
                </div>
              </section>
              <section aria-labelledby="applicant-information-title">
                <div class="bg-white shadow sm:rounded-lg">
                  <div class="px-4 py-5 sm:px-6">
                    <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">Statistik of Event</h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">Information about Event.</p>
                  </div>
                  <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Total Lead</dt>
                        <dd class="mt-1 text-sm text-gray-900">{data.length}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Concurrent Viewer</dt>
                        <dd class="mt-1 text-sm text-gray-900">{viewer.concurrent}</dd>
                      </div>
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Peak Viewer</dt>
                        <dd class="mt-1 text-sm text-gray-900">{viewer.peak}</dd>
                      </div>  
                      <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Total Viewer</dt>
                        <dd class="mt-1 text-sm text-gray-900">{viewer.total}</dd>
                      </div>  
                       
                    </dl>
                  </div> 
                </div>
              </section>
              
            <Datatable settings={settings} data={data} bind:dataRows={rows}>
                <thead>
                    <th data-key="name">Name</th>
                    <th data-key="phone">Phone</th>
                    <th data-key="email">Email</th>
                </thead>
                <tbody>
                {#if rows}
                    {#each $rows as row}
                    <tr>
                        <td>{row.name}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                    </tr>
                    {/each}
                {/if}
                </tbody>
            </Datatable>
          </div>
        </div>
      </div> 
    </div>
  
  </Layout>
  <style>
    td{text-align:center;padding:4px 0}
</style>