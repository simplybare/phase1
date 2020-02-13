import React from 'react';

export const Logo = ({ ...props }) => {
  const idPrefix = (Math.random() * 50).toString();

  return (
    <svg
      viewBox="76.625 264.66497802734375 443.4449462890625 295.6829833984375"
      style={{
        isolation: 'isolate',
      }}
      {...props}
    >
      <defs>
        <clipPath id={`a-${idPrefix}`}>
          <path d="M0 0h612v792H0z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#a-${idPrefix})`} fill="currentColor">
        <path d="M462.126 484.934H76.625v-5h385.501v5z" />
        <g clipPath={`url(#b-${idPrefix})`}>
          <path d="M98.941 354.269c-.019.028-.062.04-.131.041.069-.001.112-.013.131-.041zm49.663 96.543zm-50.686-1.099v-15.076 15.076zm249.116-57.162c.085-12.378 5.997-21.243 17.288-26.203 3.758-1.651 7.985-2.203 11.936-3.456 7.411-2.35 15.113-4.139 22.076-7.459 8.414-4.013 13.951-11.204 17.319-19.917-32.259-2.16-58.187 5.742-68.662 40.187v-34.906h-19.698v108.996H347c0-19.329-.096-38.286.034-57.242zm-164.489-18.455zm2.438 8.762zm1.169 8.78zm.04 6.582zm-6.307-30.669zm-31.518-28.233zm-42.429 7.147zm62.89 4.626zm-68.373 1.011zm-1.644 2.208zm71.442 83.395a44.052 44.052 0 005.323-6.975c2.187-3.546 4.036-7.124 5.55-10.722-1.514 3.598-3.363 7.176-5.55 10.722a44.052 44.052 0 01-5.323 6.975zM78.259 280.252v169.46-169.46zm19.659 154.385c4.669 6.6 10.814 11.345 17.668 14.329-6.854-2.984-13-7.729-17.668-14.329zm65.902 8.759zm19.668-29.887zm-24.452 32.953zm-29.959 6.057zm-8.23-1.644z" />
          <path d="M155.792 425.338c-11.479 19.855-37.933 23.705-54.585 8.604-1.806-1.636-3.141-4.714-3.222-7.171-.348-10.639-.149-21.295-.149-31.945 0-10.318.143-20.637-.078-30.95-.076-3.536 1.189-5.868 3.765-8.11 16.476-14.33 42.752-10.532 54.073 8.815 11.641 19.896 11.739 40.791.196 60.757zm30.36-33.7a61.505 61.505 0 00-.425-4.391 63.724 63.724 0 00-.744-4.389 67.447 67.447 0 00-2.438-8.762 76.207 76.207 0 00-2.66-6.545 83.31 83.31 0 00-3.369-6.511 46.068 46.068 0 00-3.562-5.32 45.46 45.46 0 00-4.126-4.629c-4.38-4.287-9.479-7.55-14.92-9.825a50.948 50.948 0 00-5.541-1.948c-13.129-3.783-27.43-2.256-38.096 4.119a36.715 36.715 0 00-4.333 3.028 34.337 34.337 0 00-1.975 1.734 32.665 32.665 0 00-3.508 3.903 31.4 31.4 0 00-1.514 2.167c-.018.028-.062.04-.13.041a1.776 1.776 0 01-.27-.027c-.223-.032-.528-.088-.895-.123v-73.907H78.259v169.46h19.659v-15.076c4.668 6.599 10.814 11.345 17.668 14.329a45.204 45.204 0 005.261 1.909 47.6 47.6 0 008.23 1.644c1.86.204 3.733.301 5.609.295a50.993 50.993 0 0013.918-2.002 50.722 50.722 0 005.335-1.874 48.677 48.677 0 005.097-2.476 47.215 47.215 0 004.784-3.066 45.508 45.508 0 006.433-5.691 44.089 44.089 0 005.323-6.974c2.187-3.547 4.036-7.124 5.55-10.723a68.953 68.953 0 002.362-6.499 64.374 64.374 0 001.64-6.535 61.024 61.024 0 001.131-10.948 61.214 61.214 0 00-.107-4.388zm83.451 32.338c-3.188 14.29-17.358 21.907-31.188 18.467-8.745-2.175-14.278-7.812-16.166-16.465-1.964-9.002.476-16.833 8.224-22.427 9.87-7.127 21.501-9.316 33.099-11.525 2.55-.485 5.144-.734 9.128-1.287-.982 11.61-.747 22.713-3.097 33.237zm43.131 10.499l-1.874.246c-.998 1.314-1.914 2.701-3.01 3.927-3.115 3.486-6.993 5.326-11.609 3.897-4.479-1.385-4.739-5.569-5.197-9.393-.157-1.315-.043-2.663-.043-3.996-.002-17.997.241-35.998-.082-53.99-.238-13.322-3.045-26.492-16.405-32.478-19.05-8.535-38.322-7.837-55.961 4.526-7.107 4.981-11.507 12.042-11.015 21.241.309 5.778 3.943 9.219 9.606 9.376 7.293.203 11.249-4.533 9.501-13.345-2.561-12.908 6.315-19.6 17.191-20.446 9.198-.714 17.975.285 23.031 9.373 5.471 9.834 5.018 20.657 4.787 31.367-9.255 1.459-18.018 2.521-26.64 4.275-12.939 2.632-25.661 6.123-35.889 15.178-12.006 10.63-12.224 28.845-.626 39.318 19.013 17.171 51.937 10.283 62.143-12.995.22-.501.538-.958 1.211-2.136.173 2.708.172 4.548.428 6.352 1.03 7.274 3.636 13.536 11.102 16.486 10.918 4.317 25.3-1.545 29.914-12.375.501-1.176-.343-2.925-.563-4.408zm149.22-90.409c18.598-1.139 32.428 12.628 32.053 32.526h-62.508c-2.287-14.589 13.606-31.494 30.455-32.526zm49.428 69.494c-5.787 15.97-17.301 24.427-34.352 26.028-28.376 2.666-53.823-27.311-46.3-55.399h86.155c0-1.276.103-1.955-.015-2.594-6.824-37.109-37.19-48.071-63.048-42.941-21.029 4.173-35.319 17.198-41.25 37.722-6.261 21.665-3.802 42.516 12.136 59.753 14.703 15.899 33.798 19.071 54.184 15.464 21.854-3.866 38.239-21.582 39.53-41.698-3.572-1.121-5.603-.301-7.04 3.665zm-164.391-37.856v-34.906h-19.698v108.995H347c0-19.329-.096-38.286.034-57.241.085-12.378 5.997-21.244 17.288-26.203 3.758-1.651 7.985-2.204 11.936-3.456 7.411-2.35 15.113-4.139 22.076-7.46 8.414-4.012 13.951-11.203 17.319-19.917-32.259-2.159-58.187 5.743-68.662 40.188zM121.706 536.686c0-9.655-7.207-16.93-16.454-16.93-9.179 0-16.386 7.275-16.386 16.93 0 9.587 7.207 16.795 16.386 16.795 9.247 0 16.454-7.208 16.454-16.795zm7.344 0c0 13.19-10.471 23.662-23.798 23.662-13.326 0-23.73-10.472-23.73-23.662 0-13.259 10.404-23.798 23.73-23.798 13.327 0 23.798 10.539 23.798 23.798zm50.457-2.04c5.031 0 8.363-2.855 8.363-7.07 0-4.284-3.332-7.14-8.363-7.14h-14.143v14.21h14.143zm8.703 24.75l-16.25-18.154h-6.596v18.154h-7.275V513.84h21.418c9.383 0 15.639 5.508 15.639 13.736 0 7.818-5.711 13.122-14.347 13.597l16.454 18.223h-9.043zm79.968-25.838c.068 1.225.136 2.313.136 3.128 0 13.394-9.451 23.662-22.982 23.662-13.463 0-23.933-10.403-23.933-23.729 0-13.259 10.403-23.731 23.729-23.731 9.723 0 18.426 4.692 21.69 13.463l-6.595 2.312c-3.196-6.527-8.976-8.907-15.095-8.907-9.179 0-16.318 7.343-16.318 16.863 0 9.586 7.275 16.862 16.726 16.862 8.364 0 14.279-5.372 15.639-13.259h-18.087v-6.664h25.09zm46.379-10.811l-8.228 19.378h16.455l-8.227-19.378zm15.57 36.648l-4.487-10.607h-22.166l-4.487 10.607h-7.888l20.059-45.555h6.798l20.058 45.555h-7.887zm75.07.001h-6.187l-27.538-32.706v32.706h-7.275v-45.557h6.187l27.47 33.25v-33.25h7.343v45.557zm31.215-45.556h7.275v45.556h-7.275V513.84zm75.136 28.149l7.071 1.496c-2.515 10.675-11.354 16.862-22.097 16.862-13.259 0-23.73-10.403-23.73-23.729 0-13.259 10.471-23.731 23.73-23.731 10.743 0 19.514 6.256 22.097 16.319l-7.071 2.04c-2.039-7.683-7.887-11.49-15.026-11.49-9.179 0-16.386 7.274-16.386 16.862 0 9.587 7.207 16.862 16.386 16.862 7.139 0 12.987-3.807 15.026-11.491zM233.513 274.682l-5.671 1.165c-.636-3.763-3.868-6.253-8.107-6.253-4.187 0-6.943 2.278-6.943 5.405 0 2.492 1.431 3.816 4.504 4.452l7.685 1.643c5.299 1.166 9.115 4.133 9.115 9.697 0 6.678-5.459 10.865-13.62 10.865-7.525 0-13.778-3.658-14.679-10.546l6.041-1.273c.848 4.558 4.399 6.783 9.168 6.783 4.77 0 7.472-2.278 7.472-5.51 0-2.703-1.431-3.975-4.982-4.717l-7.736-1.59c-4.398-1.007-8.956-3.338-8.956-9.644 0-6.253 5.141-10.494 13.036-10.494 7.207 0 12.401 3.922 13.673 10.017zm32.809-9.275h5.67v35.506h-5.67v-35.506zm78.223 35.506h-5.512v-22.682l-12.188 22.682h-3.497l-12.189-22.682v22.682h-5.511v-35.506h4.981l14.467 26.868 14.52-26.868h4.929v35.506zm49.664-17.7c4.452 0 7.102-2.543 7.102-6.359 0-3.657-2.65-6.306-7.102-6.306h-10.334v12.665h10.334zm0-17.806c7.844 0 12.771 4.663 12.771 11.447 0 6.889-4.927 11.552-12.771 11.552h-10.334v12.507h-5.67v-35.506h16.004zm69.217 35.506H438.36v-35.506h5.67v30.365h19.396v5.141zm41.659 0h-5.67v-11.765l-14.361-23.741h6.305l10.917 17.806 10.864-17.806h6.518l-14.573 23.636v11.87zM494.221 476.32h-4.233v-2.276h11.218v2.276h-4.274v12.554h-2.711V476.32zm22.921 6.504c-.09-1.916-.187-4.219-.177-6.239h-.06a95.345 95.345 0 01-1.75 5.696l-2.177 6.417h-2.084l-1.967-6.329a67.804 67.804 0 01-1.5-5.784h-.049a286.182 286.182 0 01-.265 6.329l-.33 5.96h-2.526l.988-14.83h3.559l1.932 5.956a64.68 64.68 0 011.364 5.165h.064c.399-1.62.909-3.432 1.483-5.177l2.057-5.944h3.514l.852 14.83h-2.64l-.288-6.05z" />
        </g>
      </g>
    </svg>
  );
};

export const FvopaLogo = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="95.25576782226562 131.47286987304688 288.5246276855469 216.94882202148438"
    {...props}
  >
    <title>FVOPA Organic Certified</title>
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M71.442 98.681h216.394V261.4H71.442z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 480)">
      <path
        d="M91.767 146.745c1.839 2.313 2.754 5.815 2.754 10.506v13.565c0 4.691-.907 8.192-2.73 10.505-1.823 2.305-4.586 3.462-8.296 3.462-3.72 0-6.498-1.157-8.353-3.462-1.856-2.313-2.788-5.814-2.788-10.505v-13.565c0-4.69.916-8.193 2.764-10.506 1.83-2.313 4.609-3.47 8.32-3.47 3.71 0 6.49 1.157 8.329 3.47m-14.376 2c-1.23 1.72-1.848 4.554-1.848 8.506v13.565c0 3.944.619 6.78 1.848 8.505 1.228 1.72 3.244 2.578 6.047 2.578 2.803 0 4.819-.859 6.048-2.578 1.237-1.726 1.847-4.56 1.847-8.505v-13.565c0-3.952-.61-6.787-1.847-8.506-1.23-1.719-3.245-2.578-6.048-2.578s-4.82.86-6.047 2.578m30.849 32.648h9.717c2.097 0 3.623-.602 4.586-1.799.964-1.197 1.438-3.108 1.438-5.743v-3.645c0-2.667-.474-4.603-1.438-5.823-.963-1.213-2.49-1.824-4.586-1.824h-9.717zm0-21.717h8.103l7.743-15.894h3.59l-7.791 15.998c2.394.338 4.209 1.382 5.438 3.141 1.236 1.751 1.847 4.16 1.847 7.236v3.8c0 3.332-.747 5.894-2.25 7.661-1.501 1.775-3.774 2.66-6.81 2.66h-13.06v-40.496h3.19zm49.554-12.577c1.79 2.545 2.682 6.625 2.682 12.224v3.236h-11.637v-2.827h8.449c0-4.93-.578-8.425-1.743-10.48-1.164-2.057-3.18-3.085-6.048-3.085-3.036 0-5.22.811-6.553 2.45-1.334 1.638-2 4.345-2 8.128v14.376c0 3.848.626 6.602 1.895 8.272 1.269 1.671 3.333 2.506 6.2 2.506 2.667 0 4.555-.682 5.67-2.048 1.117-1.365 1.792-3.806 2.025-7.316l3.188.305c-.168 4.217-1.1 7.26-2.787 9.132-1.686 1.88-4.385 2.811-8.096 2.811-3.71 0-6.521-1.149-8.424-3.438-1.912-2.297-2.86-5.703-2.86-10.224v-14.376c0-4.522.956-7.896 2.884-10.128 1.919-2.225 4.843-3.342 8.754-3.342 3.815 0 6.618 1.278 8.4 3.824m17.518 12.023l5.767 20.705 5.726-20.705zm19.083-15.34l-11.647 40.495h-3.236l-11.645-40.495h3.196l3.437 12.456h13.06l3.493-12.456zm30.118 0v40.495h-2.988v-35.283l-15.035 35.283h-4.152v-40.495h2.988v35.081l14.882-35.08zm28.898 0v2.891h-7.59v34.72h7.59v2.884h-18.37v-2.884h7.59v-34.72h-7.59v-2.89zm30.503 2.658c1.936 2.113 2.94 5.277 3.012 9.493l-3.188.305c-.137-3.645-.836-6.24-2.105-7.774-1.27-1.533-3.333-2.297-6.2-2.297-2.94 0-5.052.811-6.353 2.45-1.301 1.638-1.952 4.345-1.952 8.128v14.376c0 3.848.65 6.602 1.952 8.272 1.3 1.671 3.414 2.506 6.353 2.506 2.73 0 4.73-.787 5.999-2.353 1.26-1.566 2.032-4.208 2.306-7.919l3.188.297c-.17 4.257-1.221 7.462-3.14 9.622-1.928 2.16-4.691 3.237-8.305 3.237-3.815 0-6.691-1.133-8.626-3.39-1.943-2.265-2.915-5.582-2.915-9.975V156.44c0-4.32.972-7.59 2.915-9.822 1.935-2.225 4.795-3.342 8.578-3.342 3.71 0 6.537 1.061 8.48 3.165M91.032 101.27c1.59 1.728 2.41 4.313 2.466 7.768l-2.61.247c-.113-2.98-.683-5.1-1.719-6.36-1.036-1.254-2.73-1.88-5.076-1.88-2.4 0-4.136.666-5.197 2.007-1.06 1.334-1.59 3.551-1.59 6.643v11.767c0 3.147.53 5.404 1.59 6.77 1.061 1.365 2.796 2.048 5.197 2.048 2.241 0 3.871-.643 4.907-1.928 1.036-1.277 1.663-3.445 1.887-6.48l2.611.248c-.137 3.477-.996 6.103-2.57 7.871-1.575 1.766-3.839 2.65-6.795 2.65-3.116 0-5.47-.923-7.059-2.77-1.583-1.855-2.378-4.57-2.378-8.161v-12.263c0-3.534.795-6.208 2.378-8.031 1.59-1.824 3.927-2.732 7.02-2.732 3.035 0 5.348.859 6.938 2.587m25.572-2.177v2.362h-13.003v14.576h11.47v2.362h-11.47v11.476h13.003v2.353h-15.613v-33.13zm10.193 30.777h7.951c1.71 0 2.955-.499 3.742-1.47.788-.988 1.181-2.555 1.181-4.707v-2.98c0-2.184-.393-3.767-1.18-4.762-.788-.996-2.033-1.494-3.743-1.494h-7.95zm0-17.775h6.626l6.337-13.003h2.94l-6.378 13.091c1.96.274 3.438 1.133 4.45 2.563 1.003 1.437 1.51 3.413 1.51 5.927v3.108c0 2.732-.61 4.82-1.84 6.273-1.229 1.445-3.084 2.168-5.574 2.168h-10.682v-33.13h2.611zM159.3 99.093v30.777h7.791v2.353h-18.184v-2.353h7.791V99.093zm29.404 0v2.362h-6.209v28.415h6.21v2.353h-15.028v-2.353h6.208v-28.415h-6.208v-2.362zm10.77 0v13.421h10.89v2.362h-10.89v14.994h13.043v2.353h-15.654v-33.13zm35.62 0v2.362h-6.217v28.415h6.217v2.353h-15.036v-2.353h6.21v-28.415h-6.21v-2.362zm23.773 0v2.362h-13.01v14.577h11.476v2.361h-11.477v11.477h13.011v2.353h-15.613v-33.13zm15.814 0c3.205 0 5.654.988 7.357 2.964 1.694 1.976 2.546 4.642 2.546 8.015v11.011c0 3.43-.852 6.136-2.546 8.144-1.703 2-4.152 2.996-7.357 2.996h-8.24v-33.13zm-5.63 30.777h5.55c2.457 0 4.296-.779 5.526-2.32 1.228-1.55 1.846-3.719 1.846-6.507v-10.93c0-2.764-.618-4.892-1.846-6.402-1.23-1.502-3.069-2.256-5.527-2.256h-5.549zM80.525 209.215v20.874H97.47v3.67H80.525v23.324h20.295v3.671H76.469v-51.539zm68.87 51.54h-4.192L132.64 215.4l-12.625 45.354h-4.377l14.81-51.539h4.128zm40.487-47.773c2.337 2.94 3.51 7.397 3.51 13.373v17.26c0 5.975-1.157 10.424-3.478 13.371-2.321 2.94-5.84 4.41-10.561 4.41-4.731 0-8.273-1.47-10.634-4.41-2.361-2.947-3.542-7.396-3.542-13.372v-17.259c0-5.976 1.164-10.433 3.51-13.373 2.337-2.939 5.87-4.41 10.593-4.41 4.73 0 8.257 1.471 10.602 4.41m-18.296 2.546c-1.566 2.192-2.353 5.8-2.353 10.827v17.26c0 5.027.787 8.633 2.353 10.826 1.566 2.192 4.136 3.285 7.694 3.285 3.567 0 6.136-1.093 7.703-3.285 1.566-2.193 2.353-5.799 2.353-10.827v-17.259c0-5.028-.787-8.635-2.353-10.827-1.567-2.193-4.136-3.285-7.703-3.285-3.558 0-6.128 1.092-7.694 3.285m44.937-6.313v18.938h8.89c3.904 0 6.867 1.053 8.892 3.157 2.015 2.104 3.027 5.197 3.027 9.276V248c0 4.161-1.012 7.333-3.027 9.502-2.025 2.168-4.988 3.253-8.892 3.253h-12.954v-51.539zm0 47.868h8.762c2.835 0 4.867-.73 6.12-2.193 1.245-1.46 1.864-3.822 1.864-7.083v-7.22c0-3.093-.62-5.333-1.864-6.73-1.253-1.398-3.285-2.098-6.12-2.098h-8.762zm42.004-28.35l7.34 26.35 7.278-26.35zm24.288-19.518l-14.82 51.54h-4.127l-14.818-51.54h4.064l4.377 15.846h16.625l4.442-15.846z"
        fill="currentColor"
      />
      <path d="M71.442 196.746h216.394" fill="none" stroke="currentColor" strokeWidth="2.008" />
    </g>
  </svg>
);

export const LogoBar = ({ className = '' }) => (
  <div className={`w-full ${className} px-3`}>
    <div className="container px-3 md:px-0 m-auto z-20">
      <a
        href="/"
        className="simply-bare-logo text-light hover:text-white inline-block w-16 ml-3 sm:w-24 sm:ml-0 mt-5 md:mt-16 mb-16"
      >
        <Logo />
      </a>
    </div>
  </div>
);

// This is inlined because the actual SVG import breaks Gatsby
export const RubiconLogo = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 36" {...props}>
    <title>Rubicon Organics</title>
    <defs>
      <path
        d="M1 .001H.999v36h35.999v-36M3.334 33.666h31.328V2.337H3.334m21.701 8.339c-3.186 0-5.414 2.232-5.414 5.428 0 3.149 2.228 5.347 5.416 5.347h.006c3.207-.06 5.447-2.278 5.447-5.401 0-3.214-2.143-5.374-5.338-5.374m-2.949 5.32c0-1.725 1.197-2.979 2.846-2.979 1.657 0 2.859 1.254 2.859 2.979 0 1.834-1.177 3.115-2.859 3.115-1.677 0-2.846-1.281-2.846-3.115M7.811 10.677v15.266h2.504V18.79h1.83l3.934 7.153h3.023l-4.413-7.411c2.086-.299 3.26-1.791 3.26-3.819 0-3.16-2.545-4.036-5.248-4.036m-2.386 2.149h2.165c1.295 0 2.846.198 2.846 1.869 0 1.83-1.651 1.948-3.063 1.948h-1.948m11.134 9.355h7.214v-2.334h-7.214"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M40.072 10.726h2.541c1.407 0 2.728.455 2.728 2.097 0 1.052-.608 1.828-1.694 1.982l1.942 3.234H44.02l-1.696-3.098h-.95v3.098h-1.302v-7.313zm2.314 3.098c.734 0 1.591-.062 1.591-1.011 0-.869-.805-.972-1.476-.972h-1.127v1.983h1.012zM52.438 15.354c0 1.766-1.272 2.87-2.946 2.87-1.674 0-2.943-1.104-2.943-2.87v-4.628h1.303v4.586c0 .725.39 1.675 1.64 1.675 1.251 0 1.643-.95 1.643-1.675v-4.586h1.303v4.628M54.035 10.726h2.852c1.105 0 2.242.506 2.242 1.839 0 .825-.518 1.374-1.27 1.6v.022a1.736 1.736 0 011.579 1.764c0 1.592-1.384 2.088-2.767 2.088h-2.636v-7.313zm1.303 2.974h1.188c.868 0 1.302-.372 1.302-.919 0-.629-.434-.94-1.417-.94h-1.073V13.7zm0 3.223h1.199c.671 0 1.602-.113 1.602-1.074 0-.765-.496-1.032-1.551-1.032h-1.25v2.106zM60.697 18.039H62v-7.313h-1.303zM68.62 12.439c-.537-.567-1.032-.722-1.538-.722-1.509 0-2.511 1.157-2.511 2.614 0 1.558 1.002 2.717 2.511 2.717.588 0 1.156-.269 1.644-.888l1.073.763c-.662.91-1.653 1.301-2.729 1.301-2.252 0-3.863-1.527-3.863-3.812 0-2.344 1.611-3.872 3.863-3.872.992 0 1.84.318 2.563 1.156l-1.013.743M74.146 10.538c2.283-.04 3.893 1.49 3.893 3.832 0 2.285-1.61 3.812-3.893 3.854-2.251 0-3.864-1.527-3.864-3.811 0-2.345 1.613-3.875 3.864-3.875m.01 6.51c1.518 0 2.521-1.157 2.521-2.717 0-1.457-1.003-2.614-2.521-2.614-1.508 0-2.51 1.157-2.51 2.614 0 1.56 1.002 2.717 2.51 2.717M84.567 10.726v5.434l-.011.009-.011-.009-3.54-5.434h-1.726v7.313h1.3V12.43h.021l3.616 5.609h1.653v-7.313h-1.302M39.629 23.09c0-1.668 1.217-2.954 2.932-2.954 1.714 0 2.929 1.286 2.929 2.954 0 1.666-1.215 2.953-2.929 2.953-1.715 0-2.932-1.287-2.932-2.953m5.051 0c0-1.232-.835-2.239-2.119-2.239-1.286 0-2.121 1.007-2.121 2.239 0 1.23.835 2.238 2.121 2.238 1.284 0 2.119-1.008 2.119-2.238M47.379 20.278h1.976c1.438 0 1.804.867 1.804 1.573 0 .714-.534 1.389-1.382 1.484l1.597 2.567h-.954l-1.43-2.477h-.848v2.477h-.763v-5.624zm.763 2.477h1.001c.603 0 1.206-.142 1.206-.904 0-.763-.603-.904-1.206-.904h-1.001v1.808zM57.812 22.755v2.772c-.548.334-1.445.516-2.128.516-1.905 0-3.009-1.358-3.009-2.953 0-1.668 1.215-2.954 2.93-2.954 1.033 0 1.659.276 2.096.732l-.539.577c-.463-.444-.994-.594-1.557-.594-1.286 0-2.121 1.007-2.121 2.239 0 1.27.946 2.238 2.185 2.238.532 0 1.04-.102 1.381-.293v-1.564h-1.245v-.716h2.007M61.758 20.278h.691l2.406 5.624h-.888l-.564-1.391h-2.676l-.557 1.391h-.889l2.477-5.624zm1.365 3.565l-1.048-2.581h-.015l-1.064 2.581h2.127zM66.38 20.278h1l3.098 4.623h.015v-4.623h.761v5.624h-.969l-3.129-4.623h-.013v4.623h-.763v-5.624M73.494 25.902h.761v-5.624h-.761zM80.408 21.493c-.316-.413-.842-.642-1.357-.642-1.263 0-2.096 1.007-2.096 2.285 0 1.184.786 2.192 2.096 2.192.642 0 1.135-.285 1.469-.754l.643.484c-.167.231-.841.985-2.128.985-1.787 0-2.891-1.493-2.891-2.907 0-1.746 1.199-3 2.93-3 .738 0 1.518.276 1.969.874l-.635.483M83.044 24.725c.27.414.738.603 1.192.603.499 0 1.119-.316 1.119-.935 0-1.296-2.772-.493-2.772-2.687 0-.657.557-1.57 1.906-1.57.611 0 1.2.128 1.62.642l-.62.566c-.189-.295-.564-.493-1-.493-.841 0-1.096.507-1.096.855 0 1.423 2.771.574 2.771 2.598 0 1.089-.873 1.739-1.953 1.739-.722 0-1.413-.246-1.794-.778l.627-.54M0 .001h-.001v36h35.999v-36H0zm2.334 33.665h31.328V2.337H2.334v31.329zm21.701-22.99c-3.186 0-5.414 2.232-5.414 5.428 0 3.149 2.228 5.347 5.416 5.347h.006c3.207-.06 5.447-2.278 5.447-5.401 0-3.214-2.143-5.374-5.338-5.374h-.117zm-2.832 5.32c0-1.725 1.197-2.979 2.846-2.979 1.657 0 2.859 1.254 2.859 2.979 0 1.834-1.177 3.115-2.859 3.115-1.677 0-2.846-1.281-2.846-3.115zM6.811 10.677v15.266h2.504V18.79h1.83l3.934 7.153h3.023l-4.413-7.411c2.086-.299 3.26-1.791 3.26-3.819 0-3.16-2.545-4.036-5.248-4.036h-4.89zm2.504 2.149h2.165c1.295 0 2.846.198 2.846 1.869 0 1.83-1.651 1.948-3.063 1.948H9.315v-3.817zm11.134 13.172h7.214v-2.334h-7.214v2.334z"
        fill="currentColor"
      />
      <g transform="translate(-1)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="transparent"
          mask="url(#b)"
          d="M54.997 18.001L18.998 54-17 18.001l35.998-35.999 35.999 35.999"
        />
      </g>
      <path
        fill="currentColor"
        d="M89.096 11.232h-.867v-.448h2.267v.448h-.867v2.555h-.533v-2.555M91.001 10.784h.603l.531 1.468c.066.191.127.393.193.589h.018c.066-.196.123-.398.189-.589l.521-1.468h.602v3.003h-.489v-1.374c0-.277.042-.677.068-.955h-.018l-.242.698-.495 1.349h-.316l-.496-1.349-.238-.698h-.019c.026.278.068.678.068.955v1.374h-.48v-3.003"
      />
    </g>
  </svg>
);

export const TwitterIcon = ({ ...props }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Follow Simply Bare on Twitter</title>
    <path
      fill="currentColor"
      d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
    />
  </svg>
);

export const InstagramIcon = ({ ...props }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Follow Simply Bare on Instagram</title>
    <path
      fill="currentColor"
      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
    />
  </svg>
);
